import create from "zustand";
import data from "../../public/data.json";

interface Trending {
  small: string;
  large: string;
}

interface Regular {
  small: string;
  medium: string;
  large: string;
}

interface Thumbnail {
  trending?: Trending;
  regular?: Regular;
}

interface Movie {
  title: string;
  thumbnail: Thumbnail;
  year: number;
  category: string;
  rating: string;
  isBookmarked: boolean;
  isTrending: boolean;
}

interface MovieStore {
  data: Movie[];
  getBookmarkedMovies: () => Movie[];
}
export const useMovieDataStore = create<MovieStore>((set) => {
  return {
    data,
    getBookmarkedMovies: () => {
      return data.filter((movie) => movie.isBookmarked === true);
    },
  };
});
