import { prisma } from '../../lib/prisma';
import { QueryResolvers } from '../../types/generated/graphql';

export const isAvailableAccountId: QueryResolvers['isAvailableAccountId'] =
  async (parent, args, context, info) => {
    const user = await prisma.user.findUnique({
      where: {
        accountId: args.value,
      },
    });
    return user === null;
  };
