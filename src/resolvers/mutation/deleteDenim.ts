import { prisma } from '../../lib/prisma';
import { MutationResolvers } from '../../types/generated/graphql';

export const deleteDenim: MutationResolvers['deleteDenim'] = async (
  parent,
  args,
  context,
  info
) => {
  // TODO: 紐づくデニムレポートも一緒に削除する
  const userId = context.user?.id;
  if (!userId) {
    throw new Error('Authentication Error.');
  }

  const targetDenim = await prisma.denim.findUnique({
    where: {
      id: args.id,
    },
  });

  if (!targetDenim) {
    throw new Error('Not Found Todo.');
  }

  if (targetDenim.userId !== userId) {
    throw new Error('Authorization Error.');
  }

  const denim = await prisma.denim.delete({
    where: {
      id: args.id,
    },
    include: {
      user: true,
    },
  });
  return denim;
};
