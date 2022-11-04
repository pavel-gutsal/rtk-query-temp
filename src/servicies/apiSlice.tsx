import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ITodo } from '../types/ITodo';
import { IUpdates } from '../types/IUpdates';

export const todoApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3500' }),
    tagTypes: ['Todos'],
    endpoints: (builder) => ({
      getTodos: builder.query<ITodo[], void>({
        query: () => '/todos',
        transformResponse: (res: ITodo[]) => res.sort((a, b) => b.id - a.id),
        providesTags: ['Todos']
      }),
      postTodos: builder.mutation<ITodo,ITodo>({
        query: (todo) => ({
          url: '/todos',
          method: 'POST',
          body: todo
        }),
        invalidatesTags: ['Todos']
      }),
      deleteTodo: builder.mutation<ITodo, number>({
        query: (id) => ({
          url: `/todos/${id}`,
          method: 'DELETE',
          body: id
        }),
        invalidatesTags: ['Todos']
      }),
      updateTodo: builder.mutation<ITodo, IUpdates>({
        query: (todo) => ({
            url: `/todos/${todo.id}`,
            method: 'PATCH',
            body: todo
        }),
        invalidatesTags: ['Todos']
    }),
  })
})

export const {
  useGetTodosQuery,
  usePostTodosMutation,
  useDeleteTodoMutation,
  useUpdateTodoMutation,
} = todoApi;
