import React from 'react'
import MovieDetails from './MovieDetails'
import { useState, useEffect } from 'react'

const Hero = ({ moviePosters }) => {
    const [movie, setMovie] = useState(null)
    const [trailer, setTrailer] = useState("");
    const [showPlayer, setShowPlayer] = useState(false);

    useEffect(() => {
      // Check if moviePosters is defined and has a length greater than 0
      if (moviePosters && moviePosters.length > 0) {
        const mov = moviePosters[Math.floor(Math.random() * moviePosters.length)];
        
        fetch(
          `https://api.themoviedb.org/3/movie/${mov.id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&append_to_response=videos`
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(`data::: `, data);
    
            const trailerIndex = data.videos.results.findIndex(
              (element) => element.type === "Trailer"
            );
    
            const trailerURL = `https://www.youtube.com/watch?v=${data.videos?.results[trailerIndex]?.key}`;
            setTrailer(trailerURL);
          });
    
        setMovie(mov);
      } else {
        console.error("moviePosters is undefined or empty");
      }
    }, [moviePosters]);

  return (
    <div>
        <MovieDetails
        movie={movie}
        showPlayer={showPlayer}
        setShowPlayer={setShowPlayer}
        trailerURL={trailer}
      />
    </div>
  )
}

export default Hero
