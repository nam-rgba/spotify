import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shazamAPI = createApi({
  reducerPath: "shazamAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam.p.rapidapi.com",
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "3c83199b07mshbeceac5981bede3p1e9d0bjsne85bc49c2945"
      );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getCharts: builder.query({ query: "/charts/track" }),
  }),
});

export const { useGetChartsQuery } = shazamAPI;
