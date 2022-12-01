import { useState } from 'react';
import create from 'zustand';
import data from '../../public/data.json';

export const useMovieDataStore = create<MovieStore>((set) => {
  return {
    data,
    getBookMarkedMovies: () => {
      return data.filter((movie) => movie.isBookmarked);
    },
    getTrendingMovies: () => {
      return data.filter((movie) => movie.isTrending);
    },
  };
});

interface MovieStore {
  data: Movie[];
}

interface Trending {
  small?: string;
  large?: string;
}

interface Regular {
  small?: string;
  medium?: string;
  large?: string;
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
