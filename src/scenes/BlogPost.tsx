import React from "react";
import { useParams } from "react-router-dom";
import H2 from "@/shared/H2";
import { BlogPostType } from "../shared/types";

interface BlogPostProps {
  posts: BlogPostType[];
}

const BlogPost: React.FC<BlogPostProps> = ({ posts }) => {
  const { postId } = useParams<{ postId: string }>();

  const post = posts.find((p) => String(p.id) === postId);

  if (!post) {
    return <div>Blog post not found</div>;
  }

  return (
  
    <article className="relative isolate overflow-hidden bg-white px-6 py-10 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-8 lg:mx-0  lg:grid-cols-1 lg:items-center lg:justify-center lg:gap-y-8  ">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full  lg:grid-cols-1 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="">
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-start">
                {post.blogposttitle}
              </h1>
            </div>
          </div>
        </div>
        <img
          src={post.image}
          alt={post.blogposttitle}
          className=" flex  w-full m-auto  "
        />
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full  lg:grid-cols-1 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 ">
              <h3 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                {post.section1.header}
              </h3>

              <p>{post.section1.text}</p>
            </div>
          </div>
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 ">
              <h3 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                {post.section2.header}
              </h3>

              <p>{post.section2.text}</p>
            </div>
          </div>
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 ">
              <h3 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                {post.section3.header}
              </h3>

              <p>{post.section3.text}</p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogPost;
