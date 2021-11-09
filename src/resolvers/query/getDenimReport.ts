import { prisma } from '../../../src/lib/prisma';
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
  });
  if (!denimReport) {
    throw new Error('Not Found Error.');
  }
  return denimReport;
};
