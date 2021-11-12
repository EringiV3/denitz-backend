import { prisma } from '../../lib/prisma';
import { QueryResolvers } from '../../types/generated/graphql';

export const getCurrentUser: QueryResolvers['getCurrentUser'] = async (
  parent,
  args,
  context,
  info
) => {
  const user = await prisma.user.findUnique({
    where: {
      id: context.user?.id,
    },
    include: {
      profile: true,
    },
  });
  if (!user) {
    return null;
  }
  return user;
};
