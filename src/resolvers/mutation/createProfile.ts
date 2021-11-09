import { prisma } from '../../lib/prisma';
import { MutationResolvers } from '../../types/generated/graphql';

export const createProfile: MutationResolvers['createProfile'] = async (
  parent,
  args,
  context,
  info
) => {
  const userId = context.user?.id;
  if (!userId) {
    throw new Error('Authentication Error.');
  }

  const createdProfile = await prisma.profile.create({
    data: {
      name: args.input.name,
      iconImageUrl: args.input.iconImageUrl,
      description: args.input.description,
      twitterUrl: args.input.twitterUrl,
      instagramUrl: args.input.instagramUrl,
      websiteUrl: args.input.websiteUrl,
      userId: userId,
    },
    include: {
      user: true,
    },
  });
  return createdProfile;
};
