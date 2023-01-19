import create from "zustand";
import { FILTERS } from "~/constants/constants";
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

export interface Movie {
  title: string;
  thumbnail: Thumbnail;
  year: number;
  category: string;
  rating: string;
  isBookmarked: boolean;
  isTrending: boolean;
}

type State = {
  currentData: Movie[];
  activeFilter: string;
  activeFilterText: string;
  bookmarkedMovies: Movie[];
  tvShows: Movie[];
  movies: Movie[];
  textFilteredData: Movie[];
  trendingMovies: Movie[];
  showTrendingMovies: boolean;
};

type Actions = {
  setActiveFilter: (filter: string) => void;
  setActiveFilterText: (text: string) => void;
};

export const useMovieDataStore = create<State & Actions>((set) => {
  return {
    activeFilter: FILTERS.TEXT,
    activeFilterText: "",
    setActiveFilter: (filter: string) =>
      set((state) => ({ activeFilter: filter })),
    setActiveFilterText: (text: string) =>
      set((state) => ({ activeFilterText: text })),
    get bookmarkedMovies() {
      return data.filter((movie) => movie.isBookmarked === true);
    },
    get tvShows() {
      return data.filter((movie) => movie.category === "TV Series");
    },
    get movies() {
      return data.filter((movie) => movie.category === "Movie");
    },
    get textFilteredData() {
      if (!this.activeFilterText) {
        return data;
      }
      return data.filter((movie) =>
        movie.title.includes(this.activeFilterText)
      );
    },
    get showTrendingMovies() {
      return this.activeFilter === "text" && !this.activeFilterText;
    },
    get trendingMovies() {
      return data.filter((movie) => movie.isTrending);
    },
    toggleBookmark(title: string) {
      const movie = data.find((movie) => movie.title === title);
      if (movie) {
        movie.isBookmarked = !movie.isBookmarked;
      }
    },

    get currentData() {
      if (this.activeFilter === FILTERS.BOOKMARKED) {
        return this.bookmarkedMovies;
      }

      if (this.activeFilter === FILTERS.TV_SHOWS) {
        return this.tvShows;
      }

      if (this.activeFilter === FILTERS.MOVIES) {
        return this.movies;
      }

      return this.textFilteredData;
    },
  };
});
