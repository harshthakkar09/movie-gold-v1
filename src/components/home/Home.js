import React from 'react';
import Hero from "../hero/Hero"; // Import the Hero component

const Home = ({ movies }) => {
  return <Hero movies={movies} />;
};

export default Home;
