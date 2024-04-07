import H2 from "@/shared/H2";
import { Link } from "react-router-dom";
import BlogImage1 from "../assets/sumo-squat-tile.jpg";
import BlogImage2 from "../assets/blog2.jpg";
import BlogImage3 from "../assets/blog3.jpg";
import UserImage from "../assets/user-reviews.png";



 const blogPosts  = [
  {
    id: 1,
    title: 'EVERYTHING YOU NEED TO KNOW ABOUT SMITH MACHINE SQUATS',
    href: '#',
    description:
      'Everything You Need To Know About Smith Machine Squats',
    image:BlogImage3,
    date: 'Mar 16, 2024',
    datetime: '2020-03-16',
    author: {
      name: 'Michael Foster',
      image:UserImage    },
    article:""  
  },
  {
    id: 2,
    title: 'Slow & Steady Wins The Race: Reasons To Do Zone 2 Cardio',
    href: '#',
    description:
      ' Did you know 80% of your training should be in zone 2? Find out the benefits of zone 2 training, the best cardio methods, how to calculate zone 2 heart rate.',
    image:BlogImage2,
        date: 'Mar 12, 2024',
    datetime: '2020-03-16',
    author: {
      name: 'Michael Foster',
      image:UserImage    },
      article:"" 
  },
  {
    id: 3,
    title: 'How To Do Sumo Squats To Target The Inner Thighs',
    href: '#',
    description:
      'Looking to switch up your squats? Discover the benefits of sumo squats, the muscles worked and form tips - plus dumbbell, barbell and machine variations.',
    image:BlogImage1,
    date: 'Jan 09, 2024',
    datetime: '2020-03-16',
    author: {
      name: 'Michael Foster',
      image:UserImage    },
      article:"" 
  },

]



function Blog() {
  return (
    <div className="mx-auto mt-20 w-5/6 px-6 sm:mt-10 lg:px-8">
      <H2 color={"black-900"}>Blog</H2>
      <div className="mx-auto m-10 grid max-w-4xl auto-rows-fr grid-cols-1 md:grid-cols-3 sm:grid-cols-2  gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {blogPosts.map((post) => (
          <article
            key={post.id}
            className="relative isolate flex flex-col justify-end overflow-hidden rounded-xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
          >
            <img
              src={post.image}
              alt=""
              className="absolute inset-0 -z-10 h-full w-full object-cover"
            />
            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
            <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

            <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
              <time dateTime={post.datetime} className="mr-8">
                {post.date}
              </time>
              <div className="-ml-4 flex items-center gap-x-4">
                <svg
                  viewBox="0 0 2 2"
                  className="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50"
                >
                  <circle cx={1} cy={1} r={1} />
                </svg>
                <div className="flex gap-x-2.5">
                  <img
                    src={post.author.image}
                    alt=""
                    className="h-6 w-6 flex-none rounded-full bg-white/10"
                  />
                  {post.author.name}
                </div>
              </div>
            </div>
            <Link to={"/"} className="no-underline">
              <h3 className="mt-3 text-lg font-semibold leading-6 text-white ">
                <span className="absolute inset-0  " />
                {post.title}
              </h3>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Blog;
