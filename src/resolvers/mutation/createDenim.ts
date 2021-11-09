import { prisma } from '../../lib/prisma';
import { MutationResolvers } from '../../types/generated/graphql';

export const createDenim: MutationResolvers['createDenim'] = async (
  parent,
  args,
  context,
  info
) => {
  const userId = context.user?.id;
  if (!userId) {
    throw new Error('Authentication Error.');
  }

  const createdDenim = await prisma.denim.create({
    data: {
      name: args.input.name,
      description: args.input.description,
      imageUrl: args.input.imageUrl,
      userId: userId,
    },
    include: {
      user: true,
      denimReports: true,
    },
  });
  return createdDenim;
};
