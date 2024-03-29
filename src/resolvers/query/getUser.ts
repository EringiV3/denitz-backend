import { prisma } from '../../lib/prisma';
import { QueryResolvers } from '../../types/generated/graphql';

export const getUser: QueryResolvers['getUser'] = async (
  parent,
  args,
  context,
  info
) => {
  const user = await prisma.user.findUnique({
    where: {
      accountId: args.accountId,
    },
    include: {
      profile: true,
      denims: true,
    },
  });
  return user;
};
