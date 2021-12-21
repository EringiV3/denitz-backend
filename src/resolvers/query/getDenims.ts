import { prisma } from '../../lib/prisma';
import { QueryResolvers } from '../../types/generated/graphql';

export const getDenims: QueryResolvers['getDenims'] = async (
  parent,
  args,
  context,
  info
) => {
  const denims = await prisma.denim.findMany({
    where: {
      user: {
        accountId: args.accountId,
      },
    },
  });
  return denims;
};
