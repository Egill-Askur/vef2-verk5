/*
import Container from "@/components/container";
import MoreStories from "@/components/more-stories";
import HeroPost from "@/components/hero-post";
import Intro from "@/components/intro";
import Layout from "@/components/layout";
import { getAllPostsForHome } from "@/lib/api";
import Head from "next/head";
import { CMS_NAME } from "@/lib/constants";

export default function Index({ allPosts }) {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);
  return (
    <>
      <Layout>
        <Head>
          <title>{`Next.js Blog Example with ${CMS_NAME}`}</title>
        </Head>
        <Container>
          <Intro />
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const allPosts = (await getAllPostsForHome(preview)) || [];
  return {
    props: { allPosts },
  };
}
*/

// pages/index.js
import Head from 'next/head'
import Link from 'next/link'
import { getAllPostsForHome } from '../lib/api'

export default function Home({ allPosts }) {
  return (
    <div className="container mx-auto px-4 py-10">
      <Head>
        <title>My DatoCMS Blog</title>
      </Head>

      <h1 className="text-4xl font-bold mb-6">Welcome to my insect blog!</h1>
      <p className="mb-10 text-lg">Check out the latest articles below:</p>

      <ul className="space-y-6">
        {allPosts.map((post) => (
          <li key={post.slug} className="border-b pb-4">
            <Link
              href={`/posts/${post.slug}`}
              className="text-2xl text-blue-600 hover:underline font-medium"
            >
              {post.title}
            </Link>
            <p className="text-gray-600">{post.excerpt}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

// This function fetches the posts at build time (Static Generation)
export async function getStaticProps() {
  const allPosts = await getAllPostsForHome(true) // `true` means only fetch published posts
  return {
    props: { allPosts },
  }
}
