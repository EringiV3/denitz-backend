import { S3 } from 'aws-sdk';
import { v4 as uuidv4 } from 'uuid';
import { MutationResolvers } from '../../types/generated/graphql';

export const createS3SignedUrl: MutationResolvers['createS3SignedUrl'] = async (
  parent,
  args,
  context,
  info
) => {
  const userId = context.user?.id;
  if (!userId) {
    throw new Error('Authentication Error.');
  }

  const contentType = args.input.contentType;
  const fileName = `${uuidv4()}.${getExtensionByContentType(contentType)}`;

  const s3 = new S3({ region: 'ap-northeast-1', signatureVersion: 'v4' });
  const signedUrl = s3.getSignedUrl('putObject', {
    ContentType: contentType,
    Bucket: 'denitz-media-dev',
    Key: fileName,
    Expires: 60,
    ACL: 'public-read',
  });

  return {
    fileName,
    signedUrl,
  };
};

const getExtensionByContentType = (contentType: string) => {
  if (contentType === 'image/png') {
    return 'png';
  } else {
    throw new Error('未対応のcontentTypeです');
  }
};
