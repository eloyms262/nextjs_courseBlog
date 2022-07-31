import Head from "next/head";
import Image from "next/image";
import Hero from "../components/home-page/hero";
import { Fragment } from "react";
import FeaturedPosts from "../components/home-page/featured-posts";
const DUMMY_DATA = [
  {
    title: "getting-started-with-nextjs",
    image: "getting-started-nextjs.png",
    excerpt: "good shit development makes easier and robust with SSR",
    date: "2022-02-10",
    slug: "getting-started-with-nextjs",
  },
  {
    title: "getting-started-with-react",
    image: "getting-started-nextjs.png",
    excerpt: "good shit development makes easier and robust with SSR",
    date: "2022-02-10",
    slug: "getting-started-with-react",
  },
  {
    title: "getting-started-with-webdev",
    image: "getting-started-nextjs.png",
    excerpt: "good shit development makes easier and robust with SSR",
    date: "2022-02-10",
    slug: "getting-started-with-webdev",
  },
  {
    title: "getting-started-with-designing",
    image: "getting-started-nextjs.png",
    excerpt: "good shit development makes easier and robust with SSR",
    date: "2022-02-10",
    slug: "getting-started-with-designing",
  },
];
export default function Home() {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={DUMMY_DATA} />
    </Fragment>
  );
}
