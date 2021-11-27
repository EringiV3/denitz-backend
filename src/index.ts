import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader';
import { loadSchemaSync } from '@graphql-tools/load';
import { addResolversToSchema } from '@graphql-tools/schema';
import { ApolloServer } from 'apollo-server';
import jwt, { JwtPayload } from 'jsonwebtoken';
import jwksClient from 'jwks-rsa';
import { join } from 'path';
import {
  APOLLO_SERVER_PORT,
  AUTH0_AUDIENCE,
  AUTH0_DOMAIN,
} from './config/constants';
import { auth0 } from './lib/auth0';
import resolvers from './resolvers';
import { Context } from './types/context';

const schema = loadSchemaSync(join(__dirname, './schema.graphql'), {
  loaders: [new GraphQLFileLoader()],
});
const schemaWithResolvers = addResolversToSchema({ schema, resolvers });
const server = new ApolloServer({
  schema: schemaWithResolvers,
  cors: true,
  context: async (ctx) => {
    const token = ctx.req.headers.authorization?.replace('Bearer ', '');
    if (token === undefined) {
      return {
        user: undefined,
      };
    }

    try {
      const user = await new Promise<JwtPayload>((resolve, reject) => {
        const client = jwksClient({
          jwksUri: `https://${AUTH0_DOMAIN}/.well-known/jwks.json`,
        });
        jwt.verify(
          token,
          (header, cb) => {
            client.getSigningKey(header.kid, function (err, key) {
              const signingKey = key.getPublicKey();
              cb(null, signingKey);
            });
          },
          {
            audience: `${AUTH0_AUDIENCE}`,
            issuer: `https://${AUTH0_DOMAIN}/`,
            algorithms: ['RS256'],
          },
          (err, decoded) => {
            if (err) {
              return reject(err);
            }
            if (decoded === undefined) {
              return reject('decoded is invalid.');
            }
            resolve(decoded);
          }
        );
      });

      const userInfo = await auth0.getUser({
        id: user.sub ?? '',
      });

      return {
        user: {
          id: user.sub,
          auth0UserInfo: userInfo,
        },
      } as Context;
    } catch (error) {
      console.log({ error });
      return {
        user: undefined,
      };
    }
  },
});

server.listen({ port: APOLLO_SERVER_PORT }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
