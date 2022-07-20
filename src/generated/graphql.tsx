import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** insert data into the table: "notes" */
  insert_notes?: Maybe<Notes_Mutation_Response>;
  /** insert a single row into the table: "notes" */
  insert_notes_one?: Maybe<Notes>;
  /** update data of the table: "notes" */
  update_notes?: Maybe<Notes_Mutation_Response>;
  /** update single row of the table: "notes" */
  update_notes_by_pk?: Maybe<Notes>;
};


/** mutation root */
export type Mutation_RootInsert_NotesArgs = {
  objects: Array<Notes_Insert_Input>;
  on_conflict?: InputMaybe<Notes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Notes_OneArgs = {
  object: Notes_Insert_Input;
  on_conflict?: InputMaybe<Notes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_NotesArgs = {
  _set?: InputMaybe<Notes_Set_Input>;
  where: Notes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Notes_By_PkArgs = {
  _set?: InputMaybe<Notes_Set_Input>;
  pk_columns: Notes_Pk_Columns_Input;
};

/** columns and relationships of "notes" */
export type Notes = {
  __typename?: 'notes';
  id: Scalars['Int'];
  text: Scalars['String'];
};

/** Boolean expression to filter rows from the table "notes". All fields are combined with a logical 'AND'. */
export type Notes_Bool_Exp = {
  _and?: InputMaybe<Array<Notes_Bool_Exp>>;
  _not?: InputMaybe<Notes_Bool_Exp>;
  _or?: InputMaybe<Array<Notes_Bool_Exp>>;
  id?: InputMaybe<Int_Comparison_Exp>;
  text?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "notes" */
export enum Notes_Constraint {
  /** unique or primary key constraint on columns "id" */
  NotesPkey = 'notes_pkey'
}

/** input type for inserting data into table "notes" */
export type Notes_Insert_Input = {
  text?: InputMaybe<Scalars['String']>;
};

/** response of any mutation on the table "notes" */
export type Notes_Mutation_Response = {
  __typename?: 'notes_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Notes>;
};

/** on_conflict condition type for table "notes" */
export type Notes_On_Conflict = {
  constraint: Notes_Constraint;
  update_columns?: Array<Notes_Update_Column>;
  where?: InputMaybe<Notes_Bool_Exp>;
};

/** Ordering options when selecting data from "notes". */
export type Notes_Order_By = {
  id?: InputMaybe<Order_By>;
  text?: InputMaybe<Order_By>;
};

/** primary key columns input for table: notes */
export type Notes_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "notes" */
export enum Notes_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Text = 'text'
}

/** input type for updating data in table "notes" */
export type Notes_Set_Input = {
  text?: InputMaybe<Scalars['String']>;
};

/** update columns of table "notes" */
export enum Notes_Update_Column {
  /** column name */
  Text = 'text'
}

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "notes" */
  notes: Array<Notes>;
  /** fetch data from the table: "notes" using primary key columns */
  notes_by_pk?: Maybe<Notes>;
};


export type Query_RootNotesArgs = {
  distinct_on?: InputMaybe<Array<Notes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Notes_Order_By>>;
  where?: InputMaybe<Notes_Bool_Exp>;
};


export type Query_RootNotes_By_PkArgs = {
  id: Scalars['Int'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "notes" */
  notes: Array<Notes>;
  /** fetch data from the table: "notes" using primary key columns */
  notes_by_pk?: Maybe<Notes>;
};


export type Subscription_RootNotesArgs = {
  distinct_on?: InputMaybe<Array<Notes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Notes_Order_By>>;
  where?: InputMaybe<Notes_Bool_Exp>;
};


export type Subscription_RootNotes_By_PkArgs = {
  id: Scalars['Int'];
};

export type SubscribeNotesSubscriptionVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Notes_Order_By> | Notes_Order_By>;
  where?: InputMaybe<Notes_Bool_Exp>;
}>;


export type SubscribeNotesSubscription = { __typename?: 'subscription_root', notes: Array<{ __typename?: 'notes', id: number, text: string }> };

export type SubscribeNoteSubscriptionVariables = Exact<{
  id: Scalars['Int'];
}>;


export type SubscribeNoteSubscription = { __typename?: 'subscription_root', notes_by_pk?: { __typename?: 'notes', id: number, text: string } | null };

export type InsertNotesMutationVariables = Exact<{
  notes: Array<Notes_Insert_Input> | Notes_Insert_Input;
}>;


export type InsertNotesMutation = { __typename?: 'mutation_root', insert_notes?: { __typename?: 'notes_mutation_response', affected_rows: number, returning: Array<{ __typename?: 'notes', id: number, text: string }> } | null };

export type InsertNoteMutationVariables = Exact<{
  note: Notes_Insert_Input;
}>;


export type InsertNoteMutation = { __typename?: 'mutation_root', insert_notes_one?: { __typename?: 'notes', id: number, text: string } | null };

export type UpdateNotesMutationVariables = Exact<{
  notes?: InputMaybe<Notes_Set_Input>;
  where: Notes_Bool_Exp;
}>;


export type UpdateNotesMutation = { __typename?: 'mutation_root', update_notes?: { __typename?: 'notes_mutation_response', affected_rows: number, returning: Array<{ __typename?: 'notes', id: number, text: string }> } | null };

export type UpdateNoteByPkMutationVariables = Exact<{
  note?: InputMaybe<Notes_Set_Input>;
  id: Scalars['Int'];
}>;


export type UpdateNoteByPkMutation = { __typename?: 'mutation_root', update_notes_by_pk?: { __typename?: 'notes', id: number, text: string } | null };

export type NotesByPkQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type NotesByPkQuery = { __typename?: 'query_root', notes_by_pk?: { __typename?: 'notes', id: number, text: string } | null };

export type NotesQueryVariables = Exact<{
  limit: Scalars['Int'];
  offset: Scalars['Int'];
}>;


export type NotesQuery = { __typename?: 'query_root', notes: Array<{ __typename?: 'notes', id: number, text: string }> };


export const SubscribeNotesDocument = gql`
    subscription SubscribeNotes($limit: Int, $offset: Int, $order_by: [notes_order_by!], $where: notes_bool_exp) {
  notes(
    distinct_on: [id]
    limit: $limit
    offset: $offset
    order_by: $order_by
    where: $where
  ) {
    id
    text
  }
}
    `;

/**
 * __useSubscribeNotesSubscription__
 *
 * To run a query within a React component, call `useSubscribeNotesSubscription` and pass it any options that fit your needs.
 * When your component renders, `useSubscribeNotesSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSubscribeNotesSubscription({
 *   variables: {
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *      order_by: // value for 'order_by'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useSubscribeNotesSubscription(baseOptions?: Apollo.SubscriptionHookOptions<SubscribeNotesSubscription, SubscribeNotesSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<SubscribeNotesSubscription, SubscribeNotesSubscriptionVariables>(SubscribeNotesDocument, options);
      }
export type SubscribeNotesSubscriptionHookResult = ReturnType<typeof useSubscribeNotesSubscription>;
export type SubscribeNotesSubscriptionResult = Apollo.SubscriptionResult<SubscribeNotesSubscription>;
export const SubscribeNoteDocument = gql`
    subscription SubscribeNote($id: Int!) {
  notes_by_pk(id: $id) {
    id
    text
  }
}
    `;

/**
 * __useSubscribeNoteSubscription__
 *
 * To run a query within a React component, call `useSubscribeNoteSubscription` and pass it any options that fit your needs.
 * When your component renders, `useSubscribeNoteSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSubscribeNoteSubscription({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useSubscribeNoteSubscription(baseOptions: Apollo.SubscriptionHookOptions<SubscribeNoteSubscription, SubscribeNoteSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<SubscribeNoteSubscription, SubscribeNoteSubscriptionVariables>(SubscribeNoteDocument, options);
      }
export type SubscribeNoteSubscriptionHookResult = ReturnType<typeof useSubscribeNoteSubscription>;
export type SubscribeNoteSubscriptionResult = Apollo.SubscriptionResult<SubscribeNoteSubscription>;
export const InsertNotesDocument = gql`
    mutation InsertNotes($notes: [notes_insert_input!]!) {
  insert_notes(objects: $notes, on_conflict: {constraint: notes_pkey}) {
    affected_rows
    returning {
      id
      text
    }
  }
}
    `;
export type InsertNotesMutationFn = Apollo.MutationFunction<InsertNotesMutation, InsertNotesMutationVariables>;

/**
 * __useInsertNotesMutation__
 *
 * To run a mutation, you first call `useInsertNotesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertNotesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertNotesMutation, { data, loading, error }] = useInsertNotesMutation({
 *   variables: {
 *      notes: // value for 'notes'
 *   },
 * });
 */
export function useInsertNotesMutation(baseOptions?: Apollo.MutationHookOptions<InsertNotesMutation, InsertNotesMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InsertNotesMutation, InsertNotesMutationVariables>(InsertNotesDocument, options);
      }
export type InsertNotesMutationHookResult = ReturnType<typeof useInsertNotesMutation>;
export type InsertNotesMutationResult = Apollo.MutationResult<InsertNotesMutation>;
export type InsertNotesMutationOptions = Apollo.BaseMutationOptions<InsertNotesMutation, InsertNotesMutationVariables>;
export const InsertNoteDocument = gql`
    mutation InsertNote($note: notes_insert_input!) {
  insert_notes_one(object: $note, on_conflict: {constraint: notes_pkey}) {
    id
    text
  }
}
    `;
export type InsertNoteMutationFn = Apollo.MutationFunction<InsertNoteMutation, InsertNoteMutationVariables>;

/**
 * __useInsertNoteMutation__
 *
 * To run a mutation, you first call `useInsertNoteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertNoteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertNoteMutation, { data, loading, error }] = useInsertNoteMutation({
 *   variables: {
 *      note: // value for 'note'
 *   },
 * });
 */
export function useInsertNoteMutation(baseOptions?: Apollo.MutationHookOptions<InsertNoteMutation, InsertNoteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InsertNoteMutation, InsertNoteMutationVariables>(InsertNoteDocument, options);
      }
export type InsertNoteMutationHookResult = ReturnType<typeof useInsertNoteMutation>;
export type InsertNoteMutationResult = Apollo.MutationResult<InsertNoteMutation>;
export type InsertNoteMutationOptions = Apollo.BaseMutationOptions<InsertNoteMutation, InsertNoteMutationVariables>;
export const UpdateNotesDocument = gql`
    mutation UpdateNotes($notes: notes_set_input, $where: notes_bool_exp!) {
  update_notes(_set: $notes, where: $where) {
    affected_rows
    returning {
      id
      text
    }
  }
}
    `;
export type UpdateNotesMutationFn = Apollo.MutationFunction<UpdateNotesMutation, UpdateNotesMutationVariables>;

/**
 * __useUpdateNotesMutation__
 *
 * To run a mutation, you first call `useUpdateNotesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateNotesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateNotesMutation, { data, loading, error }] = useUpdateNotesMutation({
 *   variables: {
 *      notes: // value for 'notes'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useUpdateNotesMutation(baseOptions?: Apollo.MutationHookOptions<UpdateNotesMutation, UpdateNotesMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateNotesMutation, UpdateNotesMutationVariables>(UpdateNotesDocument, options);
      }
export type UpdateNotesMutationHookResult = ReturnType<typeof useUpdateNotesMutation>;
export type UpdateNotesMutationResult = Apollo.MutationResult<UpdateNotesMutation>;
export type UpdateNotesMutationOptions = Apollo.BaseMutationOptions<UpdateNotesMutation, UpdateNotesMutationVariables>;
export const UpdateNoteByPkDocument = gql`
    mutation UpdateNoteByPk($note: notes_set_input, $id: Int!) {
  update_notes_by_pk(_set: $note, pk_columns: {id: $id}) {
    id
    text
  }
}
    `;
export type UpdateNoteByPkMutationFn = Apollo.MutationFunction<UpdateNoteByPkMutation, UpdateNoteByPkMutationVariables>;

/**
 * __useUpdateNoteByPkMutation__
 *
 * To run a mutation, you first call `useUpdateNoteByPkMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateNoteByPkMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateNoteByPkMutation, { data, loading, error }] = useUpdateNoteByPkMutation({
 *   variables: {
 *      note: // value for 'note'
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUpdateNoteByPkMutation(baseOptions?: Apollo.MutationHookOptions<UpdateNoteByPkMutation, UpdateNoteByPkMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateNoteByPkMutation, UpdateNoteByPkMutationVariables>(UpdateNoteByPkDocument, options);
      }
export type UpdateNoteByPkMutationHookResult = ReturnType<typeof useUpdateNoteByPkMutation>;
export type UpdateNoteByPkMutationResult = Apollo.MutationResult<UpdateNoteByPkMutation>;
export type UpdateNoteByPkMutationOptions = Apollo.BaseMutationOptions<UpdateNoteByPkMutation, UpdateNoteByPkMutationVariables>;
export const NotesByPkDocument = gql`
    query NotesByPk($id: Int!) {
  notes_by_pk(id: $id) {
    id
    text
  }
}
    `;

/**
 * __useNotesByPkQuery__
 *
 * To run a query within a React component, call `useNotesByPkQuery` and pass it any options that fit your needs.
 * When your component renders, `useNotesByPkQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNotesByPkQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useNotesByPkQuery(baseOptions: Apollo.QueryHookOptions<NotesByPkQuery, NotesByPkQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<NotesByPkQuery, NotesByPkQueryVariables>(NotesByPkDocument, options);
      }
export function useNotesByPkLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<NotesByPkQuery, NotesByPkQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<NotesByPkQuery, NotesByPkQueryVariables>(NotesByPkDocument, options);
        }
export type NotesByPkQueryHookResult = ReturnType<typeof useNotesByPkQuery>;
export type NotesByPkLazyQueryHookResult = ReturnType<typeof useNotesByPkLazyQuery>;
export type NotesByPkQueryResult = Apollo.QueryResult<NotesByPkQuery, NotesByPkQueryVariables>;
export const NotesDocument = gql`
    query Notes($limit: Int!, $offset: Int!) {
  notes(
    limit: $limit
    offset: $offset
    distinct_on: [id]
    order_by: [{id: desc_nulls_last}]
    where: {}
  ) {
    id
    text
  }
}
    `;

/**
 * __useNotesQuery__
 *
 * To run a query within a React component, call `useNotesQuery` and pass it any options that fit your needs.
 * When your component renders, `useNotesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNotesQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function useNotesQuery(baseOptions: Apollo.QueryHookOptions<NotesQuery, NotesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<NotesQuery, NotesQueryVariables>(NotesDocument, options);
      }
export function useNotesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<NotesQuery, NotesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<NotesQuery, NotesQueryVariables>(NotesDocument, options);
        }
export type NotesQueryHookResult = ReturnType<typeof useNotesQuery>;
export type NotesLazyQueryHookResult = ReturnType<typeof useNotesLazyQuery>;
export type NotesQueryResult = Apollo.QueryResult<NotesQuery, NotesQueryVariables>;