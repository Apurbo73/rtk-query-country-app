import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "  http://localhost:3001"
  }),
  tagTypes: ["countries"],
  endpoints: builder => ({
    getALlCountries: builder.query({
      query: () => "/countries",
      providesTags: ["countries"]
    }),
    // deleteCountry: builder.mutation({
    //   query: id => ({
    //     url: `/countries/${id}`,
    //     method: "DELETE"
    //   }),
    //   invalidatesTags: ["countries"]
    // })
    getByName:builder.query({
      query:(name)=>`/countries/${name}`
    })
  })
});

export const { useGetALlCountriesQuery, useGetByNameQuery } = apiSlice;
