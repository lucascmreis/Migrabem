import Head from "next/head";

// Sections
import Hero from "../components/Hero";
import Services from "../components/Services";
import Services2 from "../components/Services2";
import Management from "../components/Management";
import TrustUs from "../components/TrustUs";

export default function Home({ hero }) {
  return (
    <>
      <Head>
        <title>Migrabem | Landing Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
      <Services />
      <Services2 />
      <Management />
      <TrustUs />
    </>
  );
}
