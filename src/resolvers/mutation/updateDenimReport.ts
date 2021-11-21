import { prisma } from '../../lib/prisma';
import { MutationResolvers } from '../../types/generated/graphql';

export const updateDenimReport: MutationResolvers['updateDenimReport'] = async (
  parent,
  args,
  context,
  info
) => {
  const userId = context.user?.id;
  if (!userId) {
    throw new Error('Authentication Error.');
  }

  const denimReport = await prisma.denimReport.findUnique({
    where: {
      id: args.id,
    },
  });

  if (!denimReport) {
    throw new Error('Not Found Error.');
  }

  const [, updatedDenimReport] = await prisma.$transaction([
    prisma.denimReportDetailImageUrl.deleteMany({
      where: {
        denimReportId: args.id,
      },
    }),
    prisma.denimReport.update({
      where: {
        id: args.id,
      },
      data: {
        title: args.input.title,
        description: args.input.description,
        frontImageUrl: args.input.frontImageUrl,
        backImageUrl: args.input.backImageUrl,
        detailImageUrl: {
          create: args.input.detailImageUrls.map((imageUrl, i) => ({
            sortKey: i,
            url: imageUrl,
          })),
        },
        denimId: args.input.denimId,
      },
      include: {
        denim: true,
        detailImageUrl: {
          orderBy: {
            sortKey: 'asc',
          },
        },
      },
    }),
  ]);

  return updatedDenimReport;
};
