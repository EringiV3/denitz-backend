import { prisma } from '../../lib/prisma';
import { QueryResolvers } from '../../types/generated/graphql';

export const getDenimReport: QueryResolvers['getDenimReport'] = async (
  parent,
  args,
  context,
  info
) => {
  const denimReport = await prisma.denimReport.findUnique({
    where: {
      id: args.id,
    },
    include: {
      denim: {
        include: {
          denimReports: true,
          user: {
            include: {
              profile: true,
            },
          },
        },
      },
      detailImageUrls: {
        orderBy: {
          sortKey: 'asc',
        },
      },
    },
  });
  return denimReport;
};
