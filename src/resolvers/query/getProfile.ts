import { prisma } from '../../lib/prisma';
import { QueryResolvers } from '../../types/generated/graphql';

export const getProfile: QueryResolvers['getProfile'] = async (
  parent,
  args,
  context,
  info
) => {
  const user = await prisma.user.findUnique({
    where: {
      accountId: args.accountId,
    },
  });
  if (user === null) {
    return null;
  }
  const profile = await prisma.profile.findUnique({
    where: {
      userId: user.id,
    },
    include: {
      user: true,
    },
  });
  return profile;
};
