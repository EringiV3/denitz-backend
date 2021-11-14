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
    throw new Error('Not Found Error.');
  }
  const profile = await prisma.profile.findUnique({
    where: {
      userId: user.id,
    },
    include: {
      user: true,
    },
  });
  if (!profile) {
    throw new Error('Not Found Error.');
  }
  return profile;
};
