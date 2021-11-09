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

  const updatedDenimReport = await prisma.denimReport.update({
    where: {
      id: args.id,
    },
    data: {
      title: args.input.title,
      description: args.input.description,
      frontImageUrl: args.input.frontImageUrl,
      backImageUrl: args.input.backImageUrl,
      detailImageUrl: args.input.detailImageUrl,
      denimId: args.input.denimId,
    },
    include: {
      denim: true,
    },
  });
  return updatedDenimReport;
};
