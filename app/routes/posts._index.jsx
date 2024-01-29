import { useLoaderData } from "@remix-run/react";
import { getPosts } from "../models/posts.server";
import Post from "../components/post";
import ListadoBlogs from "../components/listadoBlogs";

export function meta() {
  return [
    {
      title: "GuitarLA- Blog Guitarras",
      description: "GuitarLa- Blog de tienda de guitarras",
    },
  ];
}

export async function loader() {
  const posts = await getPosts();
  return posts.data;
}

function Blog() {
  const posts = useLoaderData();

  return <ListadoBlogs posts={posts} />;
}

export default Blog;
