import Image from "next/image";
import Login from "@/components/Login";
import { GetSessionParams, getSession, signOut, useSession } from "next-auth/react";
import Navbar from "@/components/Navbar";
import requests from "@/utils/requests";
import Hero from "@/components/Hero";
import Row from "@/components/Row";
import { moviePoster,content, TrendingNow, TopRated, ActionMovies, ComedyMovies, HorrorMovies, RomanceMovies, Documentaries } from "@/pages/types";

export async function getServerSideProps(context: GetSessionParams | undefined) {
  const session = await getSession(context);


  const [
    moviePosters,
    trendingNow,
    topRated,
    actionMovies,
    comedyMovies,
    horrorMovies,
    romanceMovies,
    documentaries,
  ]: [moviePoster, TrendingNow, TopRated, ActionMovies, ComedyMovies, HorrorMovies, RomanceMovies, Documentaries ] =  await Promise.all([
    fetch(requests.fetchMoviePosters).then((res) => res.json()),
    fetch(requests.fetchTrending).then((res) => res.json()),
    fetch(requests.fetchTopRated).then((res) => res.json()),
    fetch(requests.fetchActionMovies).then((res) => res.json()),
    fetch(requests.fetchComedyMovies).then((res) => res.json()),
    fetch(requests.fetchHorrorMovies).then((res) => res.json()),
    fetch(requests.fetchRomanceMovies).then((res) => res.json()),
    fetch(requests.fetchDocumentaries).then((res) => res.json()),
  ]);

  return {
    props: {
       session,
       moviePosters: moviePosters.results,
       trendingNow: trendingNow.results,
       topRated: topRated.results,
       actionMovies: actionMovies.results,
       comedyMovies: comedyMovies.results,
       horrorMovies: horrorMovies.results,
       romanceMovies: romanceMovies.results,
       documentaries: documentaries.results, },
  };
}

export default function Home({
  moviePosters,
  trendingNow,
  topRated,
  actionMovies,
  comedyMovies,
  horrorMovies,
  romanceMovies,
  documentaries,
}:{
  moviePosters: moviePoster[];
  trendingNow: TrendingNow[];
  topRated: TopRated[];
  actionMovies: ActionMovies[];
  comedyMovies: ComedyMovies[];
  horrorMovies: HorrorMovies[];
  romanceMovies: RomanceMovies[];
  documentaries: Documentaries[];
}) {
  const { data: session } = useSession();

  if (!session) return <Login />;

  return (
    <main className="relative bg-gradient-to-b from-gray-900/10 to-[#010511]">
      <Hero moviePosters={moviePosters} />

      <section className="container pb-32">
          <Row title="Trending Now" movies={trendingNow} />
          <Row title="Top Rated" movies={topRated} />
          <Row title="Action Thrillers" movies={actionMovies} />
          <Row title="Comedies" movies={comedyMovies} />
          <Row title="Scary Movies" movies={horrorMovies} />
          <Row title="Romance Movies" movies={romanceMovies} />
          <Row title="Documentaries" movies={documentaries} />
        </section>
      {/* <Navbar /> */}
    </main>
  );
}
