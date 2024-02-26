export type RootStack = {
  Home: undefined;
  Movie: { id: string; poster_path?: string };
  Search: undefined;
  Person: { id: string; profile_path?: string };
};

export type MovieGenre = {
  id: string;
  name: string;
};

export type Movie = {
  id: string;
  original_title: string;
  overview: string;
  poster_path: string;
  genres: MovieGenre[];
  runtime: number;
  status: string;
  release_date: string;
};

export type Cast = {
  adult: boolean;
  id: string;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  character: string;
  biography: string;
  place_of_birth: string;
  gender: 1 | 2;
  birthday: string;
};

export type useQueryResult<T> = {
  data: T | undefined;
  isLoading: boolean;
  isError: boolean;
  refetch: Function;
};

export type useMutateResult<T> = {
  data: T | undefined;
  isPending: boolean;
  isError: boolean;
  mutate: Function;
};
