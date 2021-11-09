import { prisma } from '../../lib/prisma';
import { MutationResolvers } from '../../types/generated/graphql';

export const updateProfile: MutationResolvers['updateProfile'] = async (
  parent,
  args,
  context,
  info
) => {
  const userId = context.user?.id;
  if (!userId) {
    throw new Error('Authentication Error.');
  }

  const profile = await prisma.profile.findUnique({
    where: {
      userId: userId,
    },
  });

  if (!profile) {
    throw new Error('Not Found Error.');
  }

  const updatedProfile = await prisma.profile.update({
    where: {
      id: userId,
    },
    data: {
      name: args.input.name,
      iconImageUrl: args.input.iconImageUrl,
      description: args.input.description,
      twitterUrl: args.input.twitterUrl,
      instagramUrl: args.input.instagramUrl,
      websiteUrl: args.input.websiteUrl,
    },
    include: {
      user: true,
    },
  });
  return updatedProfile;
};
