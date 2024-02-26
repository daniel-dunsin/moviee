import http from "../../axios.config";
import { Cast, Movie, useMutateResult, useQueryResult } from "../types";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

const apiKey = process.env.TMDB_API_KEY;

export function useGetTrendingMovies(): useQueryResult<Movie[]> {
  const { data, isError, isLoading, refetch } = useQuery<Movie[]>({
    queryKey: ["useGetTrendingMovies"],
    queryFn: async () => {
      try {
        const response = await http.get(`/movie/popular?api_key=${apiKey}`);
        return response?.data?.results || [];
      } catch (error) {
        console.error(error);
      }
    },
  });

  return {
    data,
    isError,
    isLoading,
    refetch,
  };
}

export function useGetUpcomingMovies(): useQueryResult<Movie[]> {
  const { data, isError, isLoading, refetch } = useQuery<Movie[]>({
    queryKey: ["useGetUpcomingMovies"],
    queryFn: async () => {
      try {
        const response = await http.get(`/movie/upcoming?api_key=${apiKey}`);
        return response?.data?.results || [];
      } catch (error) {
        console.error(error);
      }
    },
  });

  return {
    data,
    isError,
    isLoading,
    refetch,
  };
}

export function useGetTopRatedMovies(): useQueryResult<Movie[]> {
  const { data, isError, isLoading, refetch } = useQuery<Movie[]>({
    queryKey: ["useGetTopRatedMovies"],
    queryFn: async () => {
      try {
        const response = await http.get(`/movie/top_rated?api_key=${apiKey}`);
        return response?.data?.results || [];
      } catch (error) {
        console.error(error);
      }
    },
  });

  return {
    data,
    isError,
    isLoading,
    refetch,
  };
}

export function useGetSingleMovie(id: string): useQueryResult<Movie> {
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["useGetSingleMovie"],
    queryFn: async function () {
      const response = await http.get(`/movie/${id}?api_key=${apiKey}`);

      return response?.data;
    },

    enabled: id ? true : false,
  });

  useEffect(() => {
    if (id) refetch();
  }, [id]);

  return { data, isLoading, isError, refetch };
}

export function useGetSimilarMovies(id: string): useQueryResult<Movie[]> {
  const { data, isError, isLoading, refetch } = useQuery<Movie[]>({
    queryKey: ["useGetSimilarMovies"],
    queryFn: async () => {
      try {
        const response = await http.get(`/movie/${id}/similar?api_key=${apiKey}`);
        return response?.data?.results || [];
      } catch (error) {
        console.error(error);
      }
    },
    enabled: id ? true : false,
  });

  useEffect(() => {
    if (id) refetch();
  }, [id]);

  return {
    data,
    isError,
    isLoading,
    refetch,
  };
}

export function useGetMovieCasts(id: string): useQueryResult<Cast[]> {
  const { data, isError, isLoading, refetch } = useQuery<Cast[]>({
    queryKey: ["useGetMovieCasts"],
    queryFn: async () => {
      try {
        const response = await http.get(`/movie/${id}/credits?api_key=${apiKey}`);
        return response?.data?.cast || [];
      } catch (error) {
        console.error(error);
      }
    },
    enabled: id ? true : false,
  });

  useEffect(() => {
    if (id) refetch();
  }, [id]);

  return {
    data,
    isError,
    isLoading,
    refetch,
  };
}

export function useGetSinglePerson(id: string): useQueryResult<Cast> {
  const { data, isError, isLoading, refetch } = useQuery<Cast>({
    queryKey: ["useGetSinglePerson"],
    queryFn: async () => {
      try {
        const response = await http.get(`/person/${id}?api_key=${apiKey}`);
        return response?.data;
      } catch (error) {
        console.error(error);
      }
    },
    enabled: id ? true : false,
  });

  useEffect(() => {
    if (id) refetch();
  }, [id]);

  return {
    data,
    isError,
    isLoading,
    refetch,
  };
}

export function useGetPersonMovies(id: string): useQueryResult<Movie[]> {
  const { data, isError, isLoading, refetch } = useQuery<Movie[]>({
    queryKey: ["useGetPersonMovies"],
    queryFn: async () => {
      try {
        const response = await http.get(`/person/${id}/movie_credits?api_key=${apiKey}`);
        return response?.data?.cast || [];
      } catch (error) {
        console.error(error);
      }
    },
    enabled: id ? true : false,
  });

  useEffect(() => {
    if (id) refetch();
  }, [id]);

  return {
    data,
    isError,
    isLoading,
    refetch,
  };
}

export function useSearchMovie(search: string): useMutateResult<Movie[]> {
  const { isError, isPending, mutate, data } = useMutation<Movie[]>({
    mutationKey: ["useSearchMovie"],
    mutationFn: async () => {
      try {
        const response = await http.get(`/search/movie?api_key=${apiKey}&query=${search}`);
        return response?.data?.results || [];
      } catch (error) {
        console.error(error);
      }
    },
  });

  return {
    data,
    isError,
    isPending,
    mutate,
  };
}
