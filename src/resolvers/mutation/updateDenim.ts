import { prisma } from '../../lib/prisma';
import { MutationResolvers } from '../../types/generated/graphql';

export const updateDenim: MutationResolvers['updateDenim'] = async (
  parent,
  args,
  context,
  info
) => {
  const userId = context.user?.id;
  if (!userId) {
    throw new Error('Authentication Error.');
  }

  const denim = await prisma.denim.findUnique({
    where: {
      id: args.id,
    },
  });

  if (!denim) {
    throw new Error('Not Found Error.');
  }

  const updatedDenim = await prisma.denim.update({
    where: {
      id: args.id,
    },
    data: {
      name: args.input.name,
      description: args.input.description,
      imageUrl: args.input.imageUrl,
    },
    include: {
      user: true,
    },
  });
  return updatedDenim;
};
