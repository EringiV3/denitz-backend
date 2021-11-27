import type { User } from 'auth0';

export type Context = {
  user?: {
    id: string;
    auth0UserInfo: User;
  };
};
