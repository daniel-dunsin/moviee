import axios from "axios";

const http = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    accept: "application/json",
    // Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
  },
});

export default http;
