import { prisma } from '../../lib/prisma';
import { QueryResolvers } from '../../types/generated/graphql';

export const getDenim: QueryResolvers['getDenim'] = async (
  parent,
  args,
  context,
  info
) => {
  const denim = await prisma.denim.findUnique({
    where: {
      id: args.id,
    },
    include: {
      user: {
        include: {
          profile: true,
        },
      },
    },
  });
  return denim;
};
