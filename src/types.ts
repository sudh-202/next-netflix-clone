  interface moviePoster {
    id: number;
    title: string;
    imageUrl: string;
    results: any;
    // Add other properties as needed
  }

  interface TrendingNow {
    id: number;
    title: string;
    imageUrl: string;
    results: any;
    // Add other properties as needed
  }

  interface TopRated {
    id: number;
    title: string;
    imageUrl: string;
    results: any;
    // Add other properties as needed
  }

  interface ActionMovies {
    id: number;
    title: string;
    imageUrl: string;
    results: any;
    // Add other properties as needed
  }

  interface ComedyMovies{
    id: number;
    title: string;
    imageUrl: string;
    results: any;
    // Add other properties as needed
  }

    interface HorrorMovies {
        id: number;
        title: string;
        imageUrl: string;
        results: any;
        // Add other properties as needed
    }

    interface RomanceMovies {
        id: number;
        title: string;
        imageUrl: string;
        results: any;
        // Add other properties as needed
    }

    interface Documentaries {
        id: number;
        title: string;
        imageUrl: string;
        results: any;
        // Add other properties as needed
    }

    interface content {
        id: number;
        title: string;
        imageUrl: string;
        results: any;
        // Add other properties as needed
    }

  export type { moviePoster, TrendingNow, TopRated, ActionMovies, ComedyMovies, HorrorMovies, RomanceMovies, Documentaries, content };