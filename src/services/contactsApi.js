import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://631a2bb3dc236c0b1ed8bf56.mockapi.io',
  }),
  endpoints: builder => ({
    getContacts: builder.query({
      query: () => `/contacts`,
    }),
    getContactById: builder.query({
      query: id => `/contacts/${id}`,
    }),
  }),
});

export const { useGetContactsQuery, useGetContactByIdQuery } = contactsApi;
