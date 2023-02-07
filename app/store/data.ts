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
  activeData: Movie[];
  activeFilter: string;
  activeFilterText: string;
  trendingMovies: Movie[];
  showTrendingMovies: boolean;
};

type Actions = {
  setActiveFilter: (filter: string) => void;
  setActiveFilterText: (text: string) => void;
  toggleBookmark: (title: string) => void;
};

function getCurrentData(newFilter: string, newFilterText?: string) {
  if (newFilter === FILTERS.BOOKMARKED) {
    return data.filter((movie) => movie.isBookmarked === true);
  }

  if (newFilter === FILTERS.TV_SHOWS) {
    return data.filter((movie) => movie.category === "TV Series");
  }

  if (newFilter === FILTERS.MOVIES) {
    return data.filter((movie) => movie.category === "Movie");
  }

  if (!newFilterText) {
    return data;
  }

  return data.filter((movie) =>
    movie.title.includes(newFilterText[0].toUpperCase())
  );
}

export const useMovieDataStore = create<State & Actions>((set) => {
  return {
    activeFilter: FILTERS.TEXT,
    activeFilterText: "",
    activeData: [],
    showTrendingMovies: true,
    setActiveFilter(filter: string) {
      const _data = getCurrentData(filter);
      let showTrends = false;
      if (filter === FILTERS.TEXT) {
        showTrends = true;
      }
      set((state) => ({
        activeFilter: filter,
        activeData: _data,
        showTrendingMovies: showTrends,
      }));
    },
    setActiveFilterText(text: string) {
      const _data = getCurrentData(FILTERS.TEXT, text);
      let showTrends = false;
      if (text === "") {
        showTrends = true;
      }
      set((state) => ({
        activeFilterText: text,
        activeData: _data,
        showTrendingMovies: showTrends,
      }));
    },
    get trendingMovies() {
      return data.filter((movie) => movie.isTrending);
    },
    toggleBookmark(title: string) {
      const movie = data.find((movie) => movie.title === title);
      if (movie) {
        movie.isBookmarked = !movie.isBookmarked;
      }

      set((state) => ({
        activeData: getCurrentData(
          state.activeFilter,
          state.activeFilter === FILTERS.TEXT ? state.activeFilterText : ""
        ),
      }));
    },
  };
});
