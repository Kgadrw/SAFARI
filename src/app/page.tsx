import { FC } from 'react';
import Head from 'next/head';
import Hero from "./Components/Hero";
import Intro from "./Components/Intro";

const HomePage: FC = () => {
  return (
    <>
      <Head>
        <title>Home Page - Your Website</title>
        <meta name="description" content="Welcome to our homepage. Learn more about what we offer." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main>
        <Hero />
        <Intro />
      </main>
    </>
  );
};

export default HomePage;
