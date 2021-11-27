import { auth0 } from '../../lib/auth0';
import { prisma } from '../../lib/prisma';
import { MutationResolvers } from '../../types/generated/graphql';

export const deleteUserAccount: MutationResolvers['deleteUserAccount'] = async (
  parent,
  args,
  context,
  info
) => {
  const userId = context.user?.id;
  if (!userId) {
    throw new Error('Authentication Error.');
  }

  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    include: {
      profile: true,
      denims: {
        include: {
          denimReports: true,
        },
      },
    },
  });

  if (!user) {
    throw new Error('NotFound User Error.');
  }

  const allDenimReportIds = user.denims.flatMap((denim) => {
    const denimReportIds = denim.denimReports.map((report) => report.id);
    return denimReportIds;
  });

  const allDenimIds = user.denims.map((denim) => denim.id);

  await prisma.$transaction([
    // デニム詳細画像すべて削除
    prisma.denimReportDetailImageUrl.deleteMany({
      where: {
        OR: allDenimReportIds.map((reportId) => ({
          denimReportId: reportId,
        })),
      },
    }),
    // デニムレポートすべて削除
    prisma.denimReport.deleteMany({
      where: {
        OR: allDenimReportIds.map((reportId) => ({
          id: reportId,
        })),
      },
    }),
    // デニムすべて削除
    prisma.denim.deleteMany({
      where: {
        OR: allDenimIds.map((denimId) => ({
          id: denimId,
        })),
      },
    }),
    // プロフィール削除
    prisma.profile.delete({
      where: {
        id: user.profile?.id,
      },
    }),
    // ユーザー削除
    prisma.user.delete({
      where: {
        id: user.id,
      },
    }),
  ]);

  // Auth0ユーザー削除
  await auth0.deleteUser({ id: userId });
  return null;
};
