import { prisma } from '../../lib/prisma';
import { MutationResolvers } from '../../types/generated/graphql';

export const updateUser: MutationResolvers['updateUser'] = async (
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
      id: args.id,
    },
  });

  if (!user) {
    throw new Error('Not Found Error.');
  }

  if (user.id !== userId) {
    throw new Error('Authorization Error.');
  }

  if (!/^[A-Za-z0-9_-]+$/.test(args.input.accountId)) {
    throw new Error('Invalid Input.');
  }

  const updatedUser = await prisma.user.update({
    where: {
      id: args.id,
    },
    data: {
      accountId: args.input.accountId,
    },
  });
  return updatedUser;
};
