import { prisma } from '../../lib/prisma';
import { MutationResolvers } from '../../types/generated/graphql';

export const updateDenimReportSortOrder: MutationResolvers['updateDenimReportSortOrder'] =
  async (parent, args, context, info) => {
    const userId = context.user?.id;
    if (!userId) {
      throw new Error('Authentication Error.');
    }

    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
      include: {
        denims: true,
      },
    });

    const denim = await prisma.denim.findFirst({
      where: {
        id: args.input.denimId,
      },
      include: {
        user: true,
        denimReports: true,
      },
    });

    if (user?.accountId !== denim?.user.accountId) {
      throw new Error('Authorization Error');
    }

    await prisma.$transaction(
      args.input.sortOrder.map((reportId, index) => {
        return prisma.denimReport.update({
          where: {
            id: reportId,
          },
          data: {
            sortKey: index,
          },
        });
      })
    );

    const resultDenim = await prisma.denim.findFirst({
      where: {
        id: denim?.id,
      },
      include: {
        denimReports: {
          orderBy: {
            sortKey: 'asc',
          },
        },
      },
    });

    if (resultDenim === null) {
      throw new Error('NotFound Error');
    }

    return resultDenim;
  };
