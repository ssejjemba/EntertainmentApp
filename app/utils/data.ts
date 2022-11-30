// selectedMovies
import theGreatLands from '../../public/assets/thumbnails/the-great-lands/regular/large.jpg';
import earthsUntouched from '../../public/assets/thumbnails/earths-untouched/regular/large.jpg';
import noLandBeyond from '../../public/assets/thumbnails/no-land-beyond/regular/large.jpg';
import sameAnswerII from '../../public/assets/thumbnails/same-answer-2/regular/large.jpg';
import relentless from '../../../public/assets/thumbnails/relentless/regular/large.jpg';
import vanLife from '../../public/assets/thumbnails/van-life/regular/large.jpg';
import theHeiress from '../../public/assets/thumbnails/the-heiress/regular/large.jpg';
import offTheTrack from '../../public/assets/thumbnails/off-the-track/regular/large.jpg';
import darker from '../../public/assets/thumbnails/darker/regular/large.jpg';
import missionSaturn from '../../public/assets/thumbnails/mission-saturn/regular/large.jpg';
import whisperingHill from '../../public/assets/thumbnails/whispering-hill/regular/large.jpg';
import loneHeart from '../../public/assets/thumbnails/lone-heart/regular/large.jpg';

//TvSeries
import theDiary from '../../public/assets/thumbnails/the-diary/regular/large.jpg';
import autoSportSeries from '../../public/assets/thumbnails/autosport-the-series/regular/large.jpg';
import belowEcho from '../../public/assets/thumbnails/below-echo/regular/large.jpg';
import theRockies from '../../public/assets/thumbnails/the-rockies/regular/large.jpg';
import communityOfOurs from '../../public/assets/thumbnails/community-of-ours/regular/large.jpg';
import serie112 from '../../public/assets/thumbnails/112/regular/large.jpg';
import productionLine from '../../public/assets/thumbnails/production-line/regular/large.jpg';
import dogs from '../../public/assets/thumbnails/dogs/regular/large.jpg';
import asiaIn24Days from '../../public/assets/thumbnails/asia-in-24-days/regular/large.jpg';
import unresolvedCases from '../../public/assets/thumbnails/unresolved-cases/regular/large.jpg';
import theTastyTour from '../../public/assets/thumbnails/the-tasty-tour/regular/large.jpg';
import duringTheHunt from '../../public/assets/thumbnails/during-the-hunt/regular/large.jpg';
import beyondEarthMovie from '../../public/assets/thumbnails/beyond-earth/regular/large.jpg';
import beyondEarth from '../../../public/assets/thumbnails/beyond-earth/trending/small.jpg';
import bottomGearMovie from '../../../public/assets/thumbnails/bottom-gear/regular/large.jpg';
import m1998movie from '../../../public/assets/thumbnails/1998/regular/large.jpg';
import undiscorveredCities from '../../../public/assets/thumbnails/undiscovered-cities/trending/small.jpg';
import darkSideOfTheMoon from '../../../public/assets/thumbnails/dark-side-of-the-moon/trending/small.jpg';
import movie1998 from '../../../public/assets/thumbnails/1998/trending/small.jpg';
import bottomGear from '../../../public/assets/thumbnails/bottom-gear/trending/small.jpg';

import { BookmarkIcon } from '../components/bookmark-icons/bookmark-icon/BookmarkIcon';
import { SeriesIcon } from '../components/bookmark-icons/series-icon/SeriesIcon';
import { MoviesIcon } from '../components/bookmark-icons/movies-icon/MoviesIcon';
import { TrendingIcon } from '../components/bookmark-icons/trending-icon/TrendingIcon';

export const recommendedForYour = [
  {
    src: theGreatLands,
    name: 'The Great Lands',
    id: '1',
    year: '2019',
    category: 'Movies',
    age: 'PG',
  },
  {
    src: theDiary,
    name: 'The Diary',
    id: '2',
    year: '2019',
    category: 'TV series',
    age: 'PG',
  },
  {
    src: earthsUntouched,
    name: 'Earth Untouched',
    id: '3',
    year: '2017',
    category: 'Movies',
    age: '18+',
  },
  {
    src: noLandBeyond,
    name: 'No Land Beyond',
    id: '4',
    year: '2019',
    category: 'Movies',
    age: 'E',
  },
  {
    src: duringTheHunt,
    name: 'During The Hunt',
    id: '5',
    year: '2016',
    category: 'TV series',
    age: 'PG',
  },
  {
    src: autoSportSeries,
    name: 'Auto Sport Series',
    id: '6',
    year: '2016',
    category: 'TV series',
    age: 'PG',
  },
  {
    src: sameAnswerII,
    name: 'Same Answer 2',
    id: '7',
    year: '2017',
    category: 'TV series',
    age: 'E',
  },
  {
    src: belowEcho,
    name: 'Below Echo',
    id: '8',
    year: '2016',
    category: 'TV series',
    age: 'PG',
  },
  {
    src: theRockies,
    name: 'The Rockies',
    id: '9',
    year: '2015',
    category: 'TV series',
    age: 'E',
  },
  {
    src: relentless,
    name: 'Relentless',
    id: '10',
    year: '2017',
    category: 'Movie',
    age: 'PG',
  },
  {
    src: communityOfOurs,
    name: 'Community Of Ours',
    id: '11',
    year: '2018',
    category: 'TV series',
    age: '18+',
  },
  {
    src: vanLife,
    name: 'Van Life',
    id: '12',
    year: '2015',
    category: 'Movie',
    age: 'PG',
  },
  {
    src: theHeiress,
    name: 'The Heiress',
    id: '13',
    year: '2021',
    category: 'Movie',
    age: 'PG',
  },
  {
    src: offTheTrack,
    name: 'Off The Track',
    id: '14',
    year: '2017',
    category: 'Movie',
    age: '18+',
  },
  {
    src: whisperingHill,
    name: 'Whispering Hill',
    id: '15',
    year: '2017',
    category: 'Movie',
    age: 'E',
  },
  {
    src: serie112,
    name: '112',
    id: '16',
    year: '2013',
    category: 'Movie',
    age: 'PG',
  },
  {
    src: loneHeart,
    name: 'Lone Heart',
    id: '17',
    year: '2017',
    category: 'Movie',
    age: 'E',
  },
  {
    src: productionLine,
    name: 'Production Line',
    id: '18',
    year: '2018',
    category: 'TV serie',
    age: 'PG',
  },
  {
    src: dogs,
    name: 'Dogs',
    id: '19',
    year: '2018',
    category: 'TV serie',
    age: 'PG',
  },

  {
    src: asiaIn24Days,
    name: 'Asia In 24 Days',
    id: '20',
    year: '2018',
    category: 'TV serie',
    age: 'PG',
  },
  {
    src: theTastyTour,
    name: 'The Tasty Tour',
    id: '21',
    year: '2016',
    category: 'TV serie',
    age: 'PG',
  },
  {
    src: darker,
    name: 'Darker',
    id: '22',
    year: '2017',
    category: 'TV serie',
    age: '18+',
  },
  {
    src: unresolvedCases,
    name: 'Unresolved Cases',
    id: '23',
    year: '2018',
    category: 'TV serie',
    age: '18+',
  },
  {
    src: missionSaturn,
    name: 'Mission Saturn',
    id: '24',
    year: '2017',
    category: 'TV serie',
    age: 'PG',
  },
];

export const selectedMovies = [
  {
    src: theGreatLands,
    name: 'The Great Lands',
    id: '1',
    year: '2019',
    category: 'movie',
    age: 'PG',
  },
  {
    src: earthsUntouched,
    name: 'Earth Untouched',
    id: '2',
    year: '2019',
    category: 'movie',
    age: '18',
  },
  {
    src: noLandBeyond,
    name: 'No Land Beyond',
    id: '3',
    year: '2019',
    category: 'movie',
    age: 'PG',
  },
  {
    src: sameAnswerII,
    name: 'Same Answer 2',
    id: '4',
    year: '2017',
    category: 'movie',
    age: 'PG',
  },
  {
    src: relentless,
    name: 'Relentless',
    id: '5',
    year: '2017',
    category: 'movie',
    age: 'PG',
  },
  {
    src: beyondEarth,
    name: 'Beyond Earth',
    id: '6',
    year: '2019',
    category: 'movie',
    age: 'PG',
  },
  {
    src: beyondEarthMovie,
    name: 'Beyond Earth',
    id: '7',
    year: '2019',
    category: 'movie',
    age: 'PG',
  },
  {
    src: vanLife,
    name: 'Van Life',
    id: '8',
    year: '2015',
    category: 'movie',
    age: 'PG',
  },
  {
    src: theHeiress,
    name: 'The Heiress',
    id: '9',
    year: '2021',
    category: 'movie',
    age: 'PG',
  },
  {
    src: offTheTrack,
    name: 'Off The Track',
    id: '10',
    year: '2017',
    category: 'movie',
    age: '18+',
  },
  {
    src: bottomGearMovie,
    id: '11',
    year: '2021',
    category: 'movie',
    age: 'PG',
  },
  {
    src: m1998movie,
    name: '1998',
    id: '12',
    year: '2021',
    category: 'movie',
    age: '18+',
  },
  {
    src: darker,
    name: 'Darker',
    id: '13',
    year: '2017',
    category: 'movie',
    age: '18+',
  },
  {
    src: missionSaturn,
    name: 'Mission Saturn',
    id: '14',
    year: '2017',
    category: 'movie',
    age: 'PG',
  },
  {
    src: whisperingHill,
    name: 'Whispering Hill',
    id: '15',
    year: '2017',
    category: 'movie',
    age: 'E',
  },
  {
    src: loneHeart,
    name: 'Lone Heart',
    id: '16',
    year: '2017',
    category: 'movie',
    age: 'E',
  },
];

export const selectedTvSeries = [
  {
    src: darkSideOfTheMoon,
    name: 'Dark Side Of The Moon',
    id: '1',
    year: '2018',
    category: 'TV series',
    age: 'PG',
  },
  {
    src: theDiary,
    name: 'The Diary',
    id: '2',
    year: '2019',
    category: 'TV series',
    age: 'PG',
  },
  {
    src: autoSportSeries,
    name: 'Auto Sport Series',
    id: '3',
    year: '2018',
    category: 'TV series',
    age: 'PG',
  },
  {
    src: belowEcho,
    name: 'Below Echo',
    id: '4',
    year: '2016',
    category: 'TV series',
    age: 'PG',
  },
  {
    src: theRockies,
    name: 'The Rockies',
    id: '5',
    year: '2015',
    category: 'TV series',
    age: 'E',
  },
  {
    src: communityOfOurs,
    name: 'Community Of Ours',
    id: '6',
    year: '2018',
    category: 'TV series',
    age: '18+',
  },
  {
    src: undiscorveredCities,
    name: 'Undiscorvered Cities',
    id: '7',
    year: '2019',
    category: 'TV series',
    age: 'E',
  },
  {
    src: serie112,
    name: '112',
    id: '8',
    year: '2013',
    category: 'TV series',
    age: 'PG',
  },
  {
    src: productionLine,
    name: 'Production Line',
    id: '9',
    year: '2018',
    category: 'TV series',
    age: 'PG',
  },
  {
    src: dogs,
    name: 'Dogs',
    id: '10',
    year: '2016',
    category: 'TV series',
    age: 'E',
  },
  {
    src: asiaIn24Days,
    name: 'Asia In 24 Days',
    id: '11',
    year: '2020',
    category: 'TV series',
    age: 'PG',
  },
  {
    src: unresolvedCases,
    name: 'Unresolved Cases',
    id: '12',
    year: '2018',
    category: 'TV series',
    age: '18+',
  },
  {
    src: theTastyTour,
    name: 'The Tasty Tour',
    id: '13',
    year: '2016',
    category: 'TV series',
    age: 'PG',
  },
  {
    src: duringTheHunt,
    name: 'During The Hunt',
    id: '14',
    year: '2016',
    category: 'TV series',
    age: 'PG',
  },
];

export const trendingMovies = [
  {
    src: beyondEarth,
    name: 'Beyond Earth',
    id: '1',
    year: '2019',
    category: 'movie',
    age: 'PG',
  },

  {
    src: bottomGear,
    name: 'Bottom Gear',
    id: '2',
    year: '2021',
    category: 'movie',
    age: 'PG',
  },
  {
    src: undiscorveredCities,
    name: 'Undiscorvered Cities',
    id: '3',
    year: '2019',
    category: 'TV series',
    age: 'E',
  },
  {
    src: darkSideOfTheMoon,

    name: 'Dark Side Of The Moon',
    id: '4',
    year: '2018',
    category: 'TV series',
    age: 'PG',
  },
  {
    src: movie1998,
    name: '1998',
    id: '5',
    year: '2018',
    category: 'TV series',
    age: 'PG',
  },
  {
    src: beyondEarth,
    name: 'Beyond Earth',
    id: '1',
    year: '2019',
    category: 'movie',
    age: 'PG',
  },

  {
    src: bottomGear,
    name: 'Bottom Gear',
    id: '2',
    year: '2021',
    category: 'movie',
    age: 'PG',
  },
  {
    src: undiscorveredCities,
    name: 'Undiscorvered Cities',
    id: '3',
    year: '2019',
    category: 'TV series',
    age: 'E',
  },
  {
    src: darkSideOfTheMoon,

    name: 'Dark Side Of The Moon',
    id: '4',
    year: '2018',
    category: 'TV series',
    age: 'PG',
  },
  {
    src: movie1998,
    name: '1998',
    id: '5',
    year: '2018',
    category: 'TV series',
    age: 'PG',
  },
];

export const icons = [
  { id: '1', icon: TrendingIcon, name: 'trending' },
  { id: '2', icon: MoviesIcon, name: 'movies' },
  { id: '3', icon: SeriesIcon, name: 'series' },
  { id: '4', icon: BookmarkIcon, name: 'bookmark' },
];

export const bookmarkedMovies = [];

export const bookmarkedSeries = [];
