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

type State = {
  currentData: Movie[];
  activeFilter: string;
  activeFilterText: string;
  bookmarkedMovies: Movie[];
  tvShows: Movie[];
  movies: Movie[];
  textFilteredData: Movie[];
};

type Actions = {
  setActiveFilter: (filter: string) => void;
  setActiveFilterText: (text: string) => void;
};

export const useMovieDataStore = create<State & Actions>((set) => {
  return {
    activeFilter: "text",
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
    toggleBookmark(title: string) {
      const movie = data.find((movie) => movie.title === title);
      if (movie) {
        movie.isBookmarked = !movie.isBookmarked;
      }
    },

    get currentData() {
      if (this.activeFilter === "bookmarks") {
        return this.bookmarkedMovies;
      }

      if (this.activeFilter === "tvshows") {
        return this.tvShows;
      }

      if (this.activeFilter === "movies") {
        return this.movies;
      }

      return this.textFilteredData;
    },
  };
});
