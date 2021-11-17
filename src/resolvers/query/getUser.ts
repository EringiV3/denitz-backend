import { prisma } from '../../lib/prisma';
import { QueryResolvers } from '../../types/generated/graphql';

export const getUser: QueryResolvers['getUser'] = async (
  parent,
  args,
  context,
  info
) => {
  console.info('hoge');
  const user = await prisma.user.findUnique({
    where: {
      accountId: args.accountId,
    },
    include: {
      profile: true,
      denims: true,
    },
  });
  console.log({ denims: user?.denims });
  return user;
};
