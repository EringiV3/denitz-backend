import { prisma } from '../../lib/prisma';
import { MutationResolvers } from '../../types/generated/graphql';

export const createDenimReport: MutationResolvers['createDenimReport'] = async (
  parent,
  args,
  context,
  info
) => {
  const userId = context.user?.id;
  if (!userId) {
    throw new Error('Authentication Error.');
  }

  const createdDenimReport = await prisma.denimReport.create({
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
  return createdDenimReport;
};
