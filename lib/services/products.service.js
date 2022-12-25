import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({baseUrl:  process.env.NEXT_PUBLIC_BACKEND_HOST + '/items'}),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => '/'
    }),
    getProductsById: builder.query({
      query: (id) => `/${id}`
    })
  })
})

export const { useGetProductsQuery, useGetProductsByIdQuery } = productApi
