import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../lib/posts-util";
import Head from "next/head";
import { Fragment } from "react";
export default function AllPostsPage(props) {
  return (
    <Fragment>
      <Head>
        <title> My blog posts</title>
        <meta
          name="description"
          content="All of my blog posts regarding front-end"
        />
      </Head>
      <AllPosts posts={props.posts} />;
    </Fragment>
  );
}

export function getStaticProps() {
  const allPosts = getAllPosts();
  return { props: { posts: allPosts } };
}
