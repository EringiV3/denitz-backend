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
      id: args.id,
    },
    include: { user: true },
  });

  if (!profile) {
    throw new Error('Not Found Error.');
  }

  if (profile.user.id !== userId) {
    throw new Error('Authorization Error.');
  }

  const updatedProfile = await prisma.profile.update({
    where: {
      id: args.id,
    },
    data: {
      name: args.input.name,
      iconImageUrl: args.input.iconImageUrl,
      description: args.input.description,
      twitterUserName: args.input.twitterUserName,
      instagramUserName: args.input.instagramUserName,
      websiteUrl: args.input.websiteUrl,
    },
    include: {
      user: true,
    },
  });
  return updatedProfile;
};
