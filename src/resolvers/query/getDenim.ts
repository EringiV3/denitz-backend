import { prisma } from '../../../src/lib/prisma';
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
  });
  if (!denim) {
    throw new Error('Not Found Error.');
  }
  return denim;
};
