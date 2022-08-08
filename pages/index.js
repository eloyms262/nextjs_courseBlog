import Head from "next/head";
import Image from "next/image";
import Hero from "../components/home-page/hero";
import { Fragment } from "react";

import FeaturedPosts from "../components/home-page/featured-posts";
import { getAllPosts, getFeaturedPosts } from "../lib/posts-util";

export default function Home(props) {
  return (
    <Fragment>
      <Head>
        <title>Gelo Blog</title>
        <meta
          name="description"
          content="I post about web development front-end"
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </Fragment>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();
  return {
    props: {
      posts: featuredPosts,
    },
  };
}
