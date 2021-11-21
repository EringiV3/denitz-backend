import { prisma } from '../../lib/prisma';
import { MutationResolvers } from '../../types/generated/graphql';

export const deleteDenimReport: MutationResolvers['deleteDenimReport'] = async (
  parent,
  args,
  context,
  info
) => {
  const userId = context.user?.id;
  if (!userId) {
    throw new Error('Authentication Error.');
  }

  const targetDenimReport = await prisma.denimReport.findUnique({
    where: {
      id: args.id,
    },
    include: {
      denim: true,
    },
  });

  if (!targetDenimReport) {
    throw new Error('Not Found Todo.');
  }

  if (targetDenimReport.denim.userId !== userId) {
    throw new Error('Authorization Error.');
  }

  const denimReport = await prisma.denimReport.delete({
    where: {
      id: args.id,
    },
    include: {
      denim: true,
      detailImageUrl: {
        orderBy: {
          sortKey: 'asc',
        },
      },
    },
  });
  return denimReport;
};
