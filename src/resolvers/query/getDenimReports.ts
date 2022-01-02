import { prisma } from '../../lib/prisma';
import { QueryResolvers } from '../../types/generated/graphql';

export const getDenimReports: QueryResolvers['getDenimReports'] = async (
  parent,
  args,
  context,
  info
) => {
  const denimReports = await prisma.denimReport.findMany({
    skip: args.input.offset,
    take: args.input.perPage,
    include: {
      denim: {
        include: {
          user: true,
        },
      },
    },
    orderBy: {
      createdAt: 'desc',
    },
  });
  return denimReports;
};
