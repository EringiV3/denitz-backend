import { ManagementClient } from 'auth0';
import {
  AUTH0_DOMAIN,
  AUTH0_USER_MANAGEMENT_APP_CLIENT_ID,
  AUTH0_USER_MANAGEMENT_APP_CLIENT_SECRET,
} from '../config/constants';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const client: typeof ManagementClient = require('auth0').ManagementClient;

const auth0 = new client({
  domain: AUTH0_DOMAIN,
  clientId: AUTH0_USER_MANAGEMENT_APP_CLIENT_ID,
  clientSecret: AUTH0_USER_MANAGEMENT_APP_CLIENT_SECRET,
  scope: 'create:users read:users update:users delete:users',
});

export { auth0 };
