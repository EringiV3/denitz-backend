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
  user?: Maybe<User>;
  denimReports?: Maybe<Array<DenimReport>>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
};

export type DenimInput = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  imageUrl?: Maybe<Scalars['String']>;
};

export type DenimReport = {
  __typename?: 'DenimReport';
  id: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  frontImageUrl?: Maybe<Scalars['String']>;
  backImageUrl?: Maybe<Scalars['String']>;
  detailImageUrls?: Maybe<Array<DenimReportDetailImageUrl>>;
  denim?: Maybe<Denim>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
};

export type DenimReportDetailImageUrl = {
  __typename?: 'DenimReportDetailImageUrl';
  id: Scalars['String'];
  sortKey: Scalars['Int'];
  url: Scalars['String'];
};

export type DenimReportInput = {
  denimId: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  frontImageUrl?: Maybe<Scalars['String']>;
  backImageUrl?: Maybe<Scalars['String']>;
  detailImageUrls: Array<Scalars['String']>;
};

export type DenimReportsQueryInput = {
  offset: Scalars['Int'];
  perPage: Scalars['Int'];
};

export type GetDenimReportsResponse = {
  __typename?: 'GetDenimReportsResponse';
  totalCount: Scalars['Int'];
  denimReports: Array<DenimReport>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createUserAccount: User;
  deleteUserAccount?: Maybe<Scalars['Boolean']>;
  updateUser: User;
  createS3SignedUrl: S3SignedUrlResponse;
  updateProfile: Profile;
  createDenim: Denim;
  updateDenim: Denim;
  deleteDenim: Denim;
  createDenimReport: DenimReport;
  updateDenimReport: DenimReport;
  deleteDenimReport: DenimReport;
  updateDenimReportSortOrder: Denim;
};


export type MutationUpdateUserArgs = {
  id: Scalars['String'];
  input: UserInput;
};


export type MutationCreateS3SignedUrlArgs = {
  input: S3SignedUrlInput;
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
  input: DenimReportInput;
};


export type MutationUpdateDenimReportArgs = {
  id: Scalars['String'];
  input: DenimReportInput;
};


export type MutationDeleteDenimReportArgs = {
  id: Scalars['String'];
};


export type MutationUpdateDenimReportSortOrderArgs = {
  input: UpdateDenimReportSortOrderInput;
};

export type Profile = {
  __typename?: 'Profile';
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  iconImageUrl?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  twitterUserName?: Maybe<Scalars['String']>;
  instagramUserName?: Maybe<Scalars['String']>;
  websiteUrl?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
};

export type ProfileInput = {
  name?: Maybe<Scalars['String']>;
  iconImageUrl?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  twitterUserName?: Maybe<Scalars['String']>;
  instagramUserName?: Maybe<Scalars['String']>;
  websiteUrl?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  getCurrentUser?: Maybe<User>;
  getUser?: Maybe<User>;
  getProfile?: Maybe<Profile>;
  getDenim?: Maybe<Denim>;
  getDenims: Array<Denim>;
  getDenimReport?: Maybe<DenimReport>;
  getDenimReports: GetDenimReportsResponse;
  isAvailableAccountId?: Maybe<Scalars['Boolean']>;
};


export type QueryGetUserArgs = {
  accountId: Scalars['String'];
};


export type QueryGetProfileArgs = {
  accountId: Scalars['String'];
};


export type QueryGetDenimArgs = {
  id: Scalars['String'];
};


export type QueryGetDenimsArgs = {
  accountId: Scalars['String'];
};


export type QueryGetDenimReportArgs = {
  id: Scalars['String'];
};


export type QueryGetDenimReportsArgs = {
  input: DenimReportsQueryInput;
};


export type QueryIsAvailableAccountIdArgs = {
  value: Scalars['String'];
};

export type S3SignedUrlInput = {
  contentType: Scalars['String'];
};

export type S3SignedUrlResponse = {
  __typename?: 'S3SignedUrlResponse';
  fileName: Scalars['String'];
  signedUrl: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['String'];
  accountId: Scalars['String'];
  profile?: Maybe<Profile>;
  denims?: Maybe<Array<Denim>>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
};

export type UserInput = {
  accountId: Scalars['String'];
};

export type UpdateDenimReportSortOrderInput = {
  denimId: Scalars['String'];
  sortOrder: Array<Scalars['String']>;
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
  DenimInput: DenimInput;
  DenimReport: ResolverTypeWrapper<DenimReport>;
  DenimReportDetailImageUrl: ResolverTypeWrapper<DenimReportDetailImageUrl>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  DenimReportInput: DenimReportInput;
  DenimReportsQueryInput: DenimReportsQueryInput;
  GetDenimReportsResponse: ResolverTypeWrapper<GetDenimReportsResponse>;
  Mutation: ResolverTypeWrapper<{}>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Profile: ResolverTypeWrapper<Profile>;
  ProfileInput: ProfileInput;
  Query: ResolverTypeWrapper<{}>;
  S3SignedUrlInput: S3SignedUrlInput;
  S3SignedUrlResponse: ResolverTypeWrapper<S3SignedUrlResponse>;
  User: ResolverTypeWrapper<User>;
  UserInput: UserInput;
  updateDenimReportSortOrderInput: UpdateDenimReportSortOrderInput;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Date: Scalars['Date'];
  Denim: Denim;
  String: Scalars['String'];
  DenimInput: DenimInput;
  DenimReport: DenimReport;
  DenimReportDetailImageUrl: DenimReportDetailImageUrl;
  Int: Scalars['Int'];
  DenimReportInput: DenimReportInput;
  DenimReportsQueryInput: DenimReportsQueryInput;
  GetDenimReportsResponse: GetDenimReportsResponse;
  Mutation: {};
  Boolean: Scalars['Boolean'];
  Profile: Profile;
  ProfileInput: ProfileInput;
  Query: {};
  S3SignedUrlInput: S3SignedUrlInput;
  S3SignedUrlResponse: S3SignedUrlResponse;
  User: User;
  UserInput: UserInput;
  updateDenimReportSortOrderInput: UpdateDenimReportSortOrderInput;
}>;

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export type DenimResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Denim'] = ResolversParentTypes['Denim']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  imageUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  denimReports?: Resolver<Maybe<Array<ResolversTypes['DenimReport']>>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DenimReportResolvers<ContextType = Context, ParentType extends ResolversParentTypes['DenimReport'] = ResolversParentTypes['DenimReport']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  frontImageUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  backImageUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  detailImageUrls?: Resolver<Maybe<Array<ResolversTypes['DenimReportDetailImageUrl']>>, ParentType, ContextType>;
  denim?: Resolver<Maybe<ResolversTypes['Denim']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DenimReportDetailImageUrlResolvers<ContextType = Context, ParentType extends ResolversParentTypes['DenimReportDetailImageUrl'] = ResolversParentTypes['DenimReportDetailImageUrl']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  sortKey?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GetDenimReportsResponseResolvers<ContextType = Context, ParentType extends ResolversParentTypes['GetDenimReportsResponse'] = ResolversParentTypes['GetDenimReportsResponse']> = ResolversObject<{
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  denimReports?: Resolver<Array<ResolversTypes['DenimReport']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MutationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  createUserAccount?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  deleteUserAccount?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  updateUser?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationUpdateUserArgs, 'id' | 'input'>>;
  createS3SignedUrl?: Resolver<ResolversTypes['S3SignedUrlResponse'], ParentType, ContextType, RequireFields<MutationCreateS3SignedUrlArgs, 'input'>>;
  updateProfile?: Resolver<ResolversTypes['Profile'], ParentType, ContextType, RequireFields<MutationUpdateProfileArgs, 'id' | 'input'>>;
  createDenim?: Resolver<ResolversTypes['Denim'], ParentType, ContextType, RequireFields<MutationCreateDenimArgs, 'input'>>;
  updateDenim?: Resolver<ResolversTypes['Denim'], ParentType, ContextType, RequireFields<MutationUpdateDenimArgs, 'id' | 'input'>>;
  deleteDenim?: Resolver<ResolversTypes['Denim'], ParentType, ContextType, RequireFields<MutationDeleteDenimArgs, 'id'>>;
  createDenimReport?: Resolver<ResolversTypes['DenimReport'], ParentType, ContextType, RequireFields<MutationCreateDenimReportArgs, 'input'>>;
  updateDenimReport?: Resolver<ResolversTypes['DenimReport'], ParentType, ContextType, RequireFields<MutationUpdateDenimReportArgs, 'id' | 'input'>>;
  deleteDenimReport?: Resolver<ResolversTypes['DenimReport'], ParentType, ContextType, RequireFields<MutationDeleteDenimReportArgs, 'id'>>;
  updateDenimReportSortOrder?: Resolver<ResolversTypes['Denim'], ParentType, ContextType, RequireFields<MutationUpdateDenimReportSortOrderArgs, 'input'>>;
}>;

export type ProfileResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Profile'] = ResolversParentTypes['Profile']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  iconImageUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  twitterUserName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  instagramUserName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  websiteUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  getCurrentUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  getUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryGetUserArgs, 'accountId'>>;
  getProfile?: Resolver<Maybe<ResolversTypes['Profile']>, ParentType, ContextType, RequireFields<QueryGetProfileArgs, 'accountId'>>;
  getDenim?: Resolver<Maybe<ResolversTypes['Denim']>, ParentType, ContextType, RequireFields<QueryGetDenimArgs, 'id'>>;
  getDenims?: Resolver<Array<ResolversTypes['Denim']>, ParentType, ContextType, RequireFields<QueryGetDenimsArgs, 'accountId'>>;
  getDenimReport?: Resolver<Maybe<ResolversTypes['DenimReport']>, ParentType, ContextType, RequireFields<QueryGetDenimReportArgs, 'id'>>;
  getDenimReports?: Resolver<ResolversTypes['GetDenimReportsResponse'], ParentType, ContextType, RequireFields<QueryGetDenimReportsArgs, 'input'>>;
  isAvailableAccountId?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<QueryIsAvailableAccountIdArgs, 'value'>>;
}>;

export type S3SignedUrlResponseResolvers<ContextType = Context, ParentType extends ResolversParentTypes['S3SignedUrlResponse'] = ResolversParentTypes['S3SignedUrlResponse']> = ResolversObject<{
  fileName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  signedUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserResolvers<ContextType = Context, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  accountId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  profile?: Resolver<Maybe<ResolversTypes['Profile']>, ParentType, ContextType>;
  denims?: Resolver<Maybe<Array<ResolversTypes['Denim']>>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = Context> = ResolversObject<{
  Date?: GraphQLScalarType;
  Denim?: DenimResolvers<ContextType>;
  DenimReport?: DenimReportResolvers<ContextType>;
  DenimReportDetailImageUrl?: DenimReportDetailImageUrlResolvers<ContextType>;
  GetDenimReportsResponse?: GetDenimReportsResponseResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Profile?: ProfileResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  S3SignedUrlResponse?: S3SignedUrlResponseResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
}>;


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = Context> = Resolvers<ContextType>;
