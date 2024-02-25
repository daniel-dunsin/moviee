declare global {
  namespace NodeJS {
    interface ProcessEnv {
      TMDB_API: string;
    }
  }
}

export {};
