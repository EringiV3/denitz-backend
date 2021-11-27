import { prisma } from '../../lib/prisma';
import { MutationResolvers } from '../../types/generated/graphql';

export const deleteDenim: MutationResolvers['deleteDenim'] = async (
  parent,
  args,
  context,
  info
) => {
  const userId = context.user?.id;
  if (!userId) {
    throw new Error('Authentication Error.');
  }

  const targetDenim = await prisma.denim.findUnique({
    where: {
      id: args.id,
    },
    include: {
      denimReports: true,
    },
  });

  if (!targetDenim) {
    throw new Error('Not Found Todo.');
  }

  if (targetDenim.userId !== userId) {
    throw new Error('Authorization Error.');
  }

  const [, , denim] = await prisma.$transaction([
    prisma.denimReportDetailImageUrl.deleteMany({
      where: {
        OR: targetDenim.denimReports.map((report) => ({
          denimReportId: report.id,
        })),
      },
    }),
    prisma.denimReport.deleteMany({
      where: {
        denimId: targetDenim.id,
      },
    }),
    prisma.denim.delete({
      where: {
        id: args.id,
      },
      include: {
        user: true,
      },
    }),
  ]);
  return denim;
};
