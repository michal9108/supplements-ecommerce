import H2 from "@/shared/H2";
import { Link } from "react-router-dom";
import BlogImage1 from "../assets/sumo-squat-tile.jpg";
import BlogImage2 from "../assets/blog2.jpg";
import BlogImage3 from "../assets/blog3.jpg";
import UserImage from "../assets/user-reviews.png";
import BlogPostContainer from "@/scenes/BlogPostContainer";

interface authorType {
  name:string;
  image:string;
}
interface BlogPostType {
id:number;
image:string;
href:string;
description:string,
datetime:string
date:string;
author:authorType;
article:string;
title:string;

} 
const blogPosts = [
  {
    id: 1,
    title: "EVERYTHING YOU NEED TO KNOW ABOUT SMITH MACHINE SQUATS",
    href: "#",
    description: "Everything You Need To Know About Smith Machine Squats",
    image: BlogImage3,
    date: "Mar 16, 2024",
    datetime: "2020-03-16",
    author: {
      name: "Michael Foster",
      image: UserImage,
    },
    article:"Lorem Impsum"
  },
  {
    id: 2,
    title: "Slow & Steady Wins The Race: Reasons To Do Zone 2 Cardio",
    href: "#",
    description:
      " Did you know 80% of your training should be in zone 2? Find out the benefits of zone 2 training, the best cardio methods, how to calculate zone 2 heart rate.",
    image: BlogImage2,
    date: "Mar 12, 2024",
    datetime: "2020-03-16",
    author: {
      name: "Michael Foster",
      image: UserImage,
    },
    article: "",
  },
  {
    id: 3,
    title: "How To Do Sumo Squats To Target The Inner Thighs",
    href: "#",
    description:
      "Looking to switch up your squats? Discover the benefits of sumo squats, the muscles worked and form tips - plus dumbbell, barbell and machine variations.",
    image: BlogImage1,
    date: "Jan 09, 2024",
    datetime: "2020-03-16",
    author: {
      name: "Michael Foster",
      image: UserImage,
    },
    article: "",
  },
];

function Blog() {
  return (
    <div className="mx-auto mt-20 w-5/6 px-6 sm:mt-10 lg:px-8">
      <H2 color={"black-900"}>Blog</H2>
      <div className="mx-auto m-10 grid max-w-4xl auto-rows-fr grid-cols-1 md:grid-cols-3 sm:grid-cols-2  gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {blogPosts.map((post: BlogPostType) => (
          <BlogPostContainer
          key={post.id}
            id={post.id}
            image={post.image}
            datetime={post.datetime}
            date={post.date}
            authorImage={post.author.image}
            authorName={post.author.name}
            title={post.title}
            description={post.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Blog;
