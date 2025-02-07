//Configuração de api de requisições.
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Cardapio, Restaurante } from '../pages/Home/home-index'

type PurchaseResponse = {
  orderId: string
}

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getHomePage: builder.query<Restaurante[], void>({
      query: () => 'restaurantes'
    }),
    getFeatureEfood: builder.query<Restaurante, string>({
      query: (id) => `restaurantes/${id}`
    })
    // purchase: builder.mutation<PurchaseResponse, PurchasePayload>({
    //   query: (body) => ({
    //     url: 'checkout',
    //     method: 'POST',
    //     body
    //   })
    // })
  })
})

export const {
  useGetFeatureEfoodQuery,
  useGetHomePageQuery
  // usePurchaseMutation
} = api
export default api
