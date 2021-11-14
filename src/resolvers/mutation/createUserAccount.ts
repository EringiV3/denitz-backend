import { v4 as uuidv4 } from 'uuid';
import { prisma } from '../../lib/prisma';
import { MutationResolvers } from '../../types/generated/graphql';

export const createUserAccount: MutationResolvers['createUserAccount'] = async (
  parent,
  args,
  context,
  info
) => {
  const userId = context.user?.id;
  if (!userId) {
    throw new Error('Authentication Error.');
  }

  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });

  if (user) {
    throw new Error('Alredy exists user.');
  }

  // 空のプロフィールと一緒にユーザーアカウントを作成
  const createdUser = await prisma.user.create({
    data: {
      id: userId,
      accountId: uuidv4(),
      profile: {
        create: {},
      },
    },
  });
  return createdUser;
};
