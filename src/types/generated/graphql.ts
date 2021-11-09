import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { Context } from '../context';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
};


export type Denim = {
  __typename?: 'Denim';
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  imageUrl?: Maybe<Scalars['String']>;
  user: User;
  denimReports: Array<DenimReport>;
  createdAt: Scalars['String'];
  updatedAt?: Maybe<Scalars['String']>;
};

export type DenimInput = {
  __typename?: 'DenimInput';
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  imageUrl?: Maybe<Scalars['String']>;
};

export type DenimReport = {
  __typename?: 'DenimReport';
  id: Scalars['String'];
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  frontImageUrl?: Maybe<Scalars['String']>;
  backImageUrl?: Maybe<Scalars['String']>;
  detailImageUrl: Array<Maybe<Scalars['String']>>;
  denim: Denim;
  createdAt: Scalars['String'];
  updatedAt?: Maybe<Scalars['String']>;
};

export type DenimReportInput = {
  __typename?: 'DenimReportInput';
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  frontImageUrl?: Maybe<Scalars['String']>;
  backImageUrl?: Maybe<Scalars['String']>;
  detailImageUrl?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createUser: User;
  updateUser: User;
  createS3SignedUrl: Scalars['String'];
  updateProfile: Profile;
  createDenim: Denim;
  updateDenim: Denim;
  deleteDenim: Denim;
  createDenimReport: DenimReport;
  updateDenimReport: DenimReport;
  deleteDenimReport: DenimReport;
};


export type MutationCreateUserArgs = {
  input: UserInput;
};


export type MutationUpdateUserArgs = {
  id: Scalars['String'];
  input: UserInput;
};


export type MutationUpdateProfileArgs = {
  id: Scalars['String'];
  input: ProfileInput;
};


export type MutationCreateDenimArgs = {
  input: DenimInput;
};


export type MutationUpdateDenimArgs = {
  id: Scalars['String'];
  input: DenimInput;
};


export type MutationDeleteDenimArgs = {
  id: Scalars['String'];
};


export type MutationCreateDenimReportArgs = {
  input?: Maybe<DenimReportInput>;
};


export type MutationUpdateDenimReportArgs = {
  id: Scalars['String'];
  inpu?: Maybe<DenimReportInput>;
};


export type MutationDeleteDenimReportArgs = {
  id: Scalars['String'];
};

export type Profile = {
  __typename?: 'Profile';
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  iconImageUrl?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  twitterUrl?: Maybe<Scalars['String']>;
  instagramUrl?: Maybe<Scalars['String']>;
  websiteUrl?: Maybe<Scalars['String']>;
  user: User;
  createdAt: Scalars['String'];
  updatedAt?: Maybe<Scalars['String']>;
};

export type ProfileInput = {
  __typename?: 'ProfileInput';
  name?: Maybe<Scalars['String']>;
  iconImageUrl?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  twitterUrl?: Maybe<Scalars['String']>;
  instagramUrl?: Maybe<Scalars['String']>;
  websiteUrl?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  getUser: User;
  getProfile: Profile;
  getDenim: Denim;
  getDenimReport: DenimReport;
};


export type QueryGetProfileArgs = {
  accountId: Scalars['String'];
};


export type QueryGetDenimArgs = {
  id: Scalars['String'];
};


export type QueryGetDenimReportArgs = {
  id: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['String'];
  accountId: Scalars['String'];
  profile: Profile;
  denim: Array<Denim>;
  createdAt: Scalars['String'];
  updatedAt?: Maybe<Scalars['String']>;
};

export type UserInput = {
  accountId: Scalars['String'];
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Date: ResolverTypeWrapper<Scalars['Date']>;
  Denim: ResolverTypeWrapper<Denim>;
  String: ResolverTypeWrapper<Scalars['String']>;
  DenimInput: ResolverTypeWrapper<DenimInput>;
  DenimReport: ResolverTypeWrapper<DenimReport>;
  DenimReportInput: ResolverTypeWrapper<DenimReportInput>;
  Mutation: ResolverTypeWrapper<{}>;
  Profile: ResolverTypeWrapper<Profile>;
  ProfileInput: ResolverTypeWrapper<ProfileInput>;
  Query: ResolverTypeWrapper<{}>;
  User: ResolverTypeWrapper<User>;
  UserInput: UserInput;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Date: Scalars['Date'];
  Denim: Denim;
  String: Scalars['String'];
  DenimInput: DenimInput;
  DenimReport: DenimReport;
  DenimReportInput: DenimReportInput;
  Mutation: {};
  Profile: Profile;
  ProfileInput: ProfileInput;
  Query: {};
  User: User;
  UserInput: UserInput;
  Boolean: Scalars['Boolean'];
}>;

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export type DenimResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Denim'] = ResolversParentTypes['Denim']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  imageUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  denimReports?: Resolver<Array<ResolversTypes['DenimReport']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DenimInputResolvers<ContextType = Context, ParentType extends ResolversParentTypes['DenimInput'] = ResolversParentTypes['DenimInput']> = ResolversObject<{
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  imageUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DenimReportResolvers<ContextType = Context, ParentType extends ResolversParentTypes['DenimReport'] = ResolversParentTypes['DenimReport']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  frontImageUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  backImageUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  detailImageUrl?: Resolver<Array<Maybe<ResolversTypes['String']>>, ParentType, ContextType>;
  denim?: Resolver<ResolversTypes['Denim'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DenimReportInputResolvers<ContextType = Context, ParentType extends ResolversParentTypes['DenimReportInput'] = ResolversParentTypes['DenimReportInput']> = ResolversObject<{
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  frontImageUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  backImageUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  detailImageUrl?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MutationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  createUser?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationCreateUserArgs, 'input'>>;
  updateUser?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationUpdateUserArgs, 'id' | 'input'>>;
  createS3SignedUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updateProfile?: Resolver<ResolversTypes['Profile'], ParentType, ContextType, RequireFields<MutationUpdateProfileArgs, 'id' | 'input'>>;
  createDenim?: Resolver<ResolversTypes['Denim'], ParentType, ContextType, RequireFields<MutationCreateDenimArgs, 'input'>>;
  updateDenim?: Resolver<ResolversTypes['Denim'], ParentType, ContextType, RequireFields<MutationUpdateDenimArgs, 'id' | 'input'>>;
  deleteDenim?: Resolver<ResolversTypes['Denim'], ParentType, ContextType, RequireFields<MutationDeleteDenimArgs, 'id'>>;
  createDenimReport?: Resolver<ResolversTypes['DenimReport'], ParentType, ContextType, RequireFields<MutationCreateDenimReportArgs, never>>;
  updateDenimReport?: Resolver<ResolversTypes['DenimReport'], ParentType, ContextType, RequireFields<MutationUpdateDenimReportArgs, 'id'>>;
  deleteDenimReport?: Resolver<ResolversTypes['DenimReport'], ParentType, ContextType, RequireFields<MutationDeleteDenimReportArgs, 'id'>>;
}>;

export type ProfileResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Profile'] = ResolversParentTypes['Profile']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  iconImageUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  twitterUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  instagramUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  websiteUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProfileInputResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ProfileInput'] = ResolversParentTypes['ProfileInput']> = ResolversObject<{
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  iconImageUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  twitterUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  instagramUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  websiteUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  getUser?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  getProfile?: Resolver<ResolversTypes['Profile'], ParentType, ContextType, RequireFields<QueryGetProfileArgs, 'accountId'>>;
  getDenim?: Resolver<ResolversTypes['Denim'], ParentType, ContextType, RequireFields<QueryGetDenimArgs, 'id'>>;
  getDenimReport?: Resolver<ResolversTypes['DenimReport'], ParentType, ContextType, RequireFields<QueryGetDenimReportArgs, 'id'>>;
}>;

export type UserResolvers<ContextType = Context, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  accountId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  profile?: Resolver<ResolversTypes['Profile'], ParentType, ContextType>;
  denim?: Resolver<Array<ResolversTypes['Denim']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = Context> = ResolversObject<{
  Date?: GraphQLScalarType;
  Denim?: DenimResolvers<ContextType>;
  DenimInput?: DenimInputResolvers<ContextType>;
  DenimReport?: DenimReportResolvers<ContextType>;
  DenimReportInput?: DenimReportInputResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Profile?: ProfileResolvers<ContextType>;
  ProfileInput?: ProfileInputResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
}>;


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = Context> = Resolvers<ContextType>;
