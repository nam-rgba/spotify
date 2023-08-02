import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shazamAPI = createApi({
  reducerPath: "shazamAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam.p.rapidapi.com",
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        import.meta.env.VITE_SHAZAM_CORE_RAPID_API_KEY
      );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getCharts: builder.query({ query: () => "/charts/track" }),
  }),
});

export const { useGetChartsQuery } = shazamAPI;
