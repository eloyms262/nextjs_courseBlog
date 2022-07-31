import Head from "next/head";
import Image from "next/image";
import Hero from "../components/home-page/hero";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <Hero />
      {/* <FeaturedPosts /> */}
    </Fragment>
  );
}
