import { prisma } from '../../../src/lib/prisma';
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
  const profile = await prisma.profile.findUnique({
    where: {
      userId: user?.id,
    },
  });
  if (!profile) {
    throw new Error('Not Found Error.');
  }
  return profile;
};
