import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const paymentApi = createApi({
  reducerPath: 'paymentApi',
  baseQuery: fetchBaseQuery({baseUrl:  process.env.NEXT_PUBLIC_BACKEND_HOST + '/transactions'}),
  endpoints: (builder) => ({
    postPayment: builder.mutation({
      query: ({body}) => ({
        url: '',
        method: 'POST',
        body
      })
    }),
    getPaymentById: builder.query({
      query: (id) => `/${id}`
    })
  })
})

export const { usePostPaymentMutation, useGetPaymentByIdQuery } = paymentApi
