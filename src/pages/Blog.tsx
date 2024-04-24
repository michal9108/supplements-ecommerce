import H2 from "@/shared/H2";

import BlogImage1 from "../assets/sumo-squat-tile.jpg";
import BlogImage2 from "../assets/blog2.jpg";
import BlogImage3 from "../assets/blog3.jpg";
import UserImage from "../assets/user-reviews.png";
import BlogPostContainer from "@/scenes/BlogPostContainer";
import { BlogPostType } from "../shared/types";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    title: "Everything You Need To Know About Smith Machine Squats",
    blogposttitle: "Everything You Need To Know About Smith Machine Squats",
    image: BlogImage3,
    date: "Mar 16, 2024",
    datetime: "2020-03-16",
    author: {
      name: "Michael Foster",
      image: UserImage,
    },
    section1: {
      header: "Introduction to Smith Machine Squats",
      text: "The Smith machine has become a staple in many gyms around the world, offering a versatile platform for various strength training exercises. One of the most popular exercises performed on this machine is the Smith machine squat. At first glance, it may resemble a traditional squat, but there are unique characteristics and techniques that differentiate it. The Smith machine squat involves using a fixed barbell attached to vertical guide rails, providing a controlled and guided motion throughout the exercise. This can be beneficial for individuals looking to develop proper squatting form, stability, and muscle engagement.",
    },
    section2: {
      header: "How To Perform Smith Machine Squats",
      text: "Executing Smith machine squats requires attention to detail to ensure both effectiveness and safety. To begin, position yourself beneath the Smith machine barbell, adjusting its height to align with your shoulders or slightly below. Adopt a shoulder-width stance with your feet slightly in front for stability. Secure an overhand grip on the barbell, ensuring it's wider than shoulder-width to maintain control throughout the movement. As you initiate the squat, bend your knees and push your hips back while keeping an upright chest and engaged core. Descend into the squat, aiming to reach a parallel thigh position or slightly lower. To ascend, push through your heels, extending your knees and hips simultaneously. Remember to inhale during the descent phase and exhale as you return to the starting position.",
    },
    section3: {
      header: "Benefits and Precautions of Smith Machine Squats",
      text: "Incorporating Smith machine squats into your workout routine can offer a range of benefits for both novice and experienced gym-goers. The Smith machine provides a consistent barbell path, which can be advantageous for beginners to develop proper squatting form and technique. Additionally, the guided motion of the Smith machine offers stability, reducing the risk of injury, especially when lifting heavier weights or experiencing fatigue. From a muscle engagement perspective, Smith machine squats activate various muscle groups, including the quadriceps, hamstrings, glutes, and core, promoting balanced lower body strength and development. However, it's essential to practice caution and adhere to specific guidelines when performing Smith machine squats. Always prioritize maintaining proper squatting form, avoid excessive forward lean or rounding of the back, and consider warming up with dynamic stretches and mobility exercises specific to the lower body to prepare your muscles and joints for the squatting movement.",
    },
  },
  {
    id: 2,
    title: "Slow & Steady Wins The Race: Reasons To Do Zone 2 Cardio",

    blogposttitle:
      " Did you know 80% of your training should be in zone 2? Find out the benefits of zone 2 training, the best cardio methods, how to calculate zone 2 heart rate.",
    image: BlogImage2,
    date: "Mar 12, 2024",
    datetime: "2020-03-16",
    author: {
      name: "Michael Foster",
      image: UserImage,
    },
    section1: {
      header: "Introduction to Smith Machine Squats",
      text: "The Smith machine has become a staple in many gyms around the world, offering a versatile platform for various strength training exercises. One of the most popular exercises performed on this machine is the Smith machine squat. At first glance, it may resemble a traditional squat, but there are unique characteristics and techniques that differentiate it. The Smith machine squat involves using a fixed barbell attached to vertical guide rails, providing a controlled and guided motion throughout the exercise. This can be beneficial for individuals looking to develop proper squatting form, stability, and muscle engagement.",
    },
    section2: {
      header: "How To Perform Smith Machine Squats",
      text: "Executing Smith machine squats requires attention to detail to ensure both effectiveness and safety. To begin, position yourself beneath the Smith machine barbell, adjusting its height to align with your shoulders or slightly below. Adopt a shoulder-width stance with your feet slightly in front for stability. Secure an overhand grip on the barbell, ensuring it's wider than shoulder-width to maintain control throughout the movement. As you initiate the squat, bend your knees and push your hips back while keeping an upright chest and engaged core. Descend into the squat, aiming to reach a parallel thigh position or slightly lower. To ascend, push through your heels, extending your knees and hips simultaneously. Remember to inhale during the descent phase and exhale as you return to the starting position.",
    },
    section3: {
      header: "Benefits and Precautions of Smith Machine Squats",
      text: "Incorporating Smith machine squats into your workout routine can offer a range of benefits for both novice and experienced gym-goers. The Smith machine provides a consistent barbell path, which can be advantageous for beginners to develop proper squatting form and technique. Additionally, the guided motion of the Smith machine offers stability, reducing the risk of injury, especially when lifting heavier weights or experiencing fatigue. From a muscle engagement perspective, Smith machine squats activate various muscle groups, including the quadriceps, hamstrings, glutes, and core, promoting balanced lower body strength and development. However, it's essential to practice caution and adhere to specific guidelines when performing Smith machine squats. Always prioritize maintaining proper squatting form, avoid excessive forward lean or rounding of the back, and consider warming up with dynamic stretches and mobility exercises specific to the lower body to prepare your muscles and joints for the squatting movement.",
    },
  },
  {
    id: 3,
    title: "How To Do Sumo Squats To Target The Inner Thighs",

    blogposttitle:
      "Looking to switch up your squats? Discover the benefits of sumo squats, the muscles worked and form tips - plus dumbbell, barbell and machine variations.",
    image: BlogImage1,
    date: "Jan 09, 2024",
    datetime: "2020-03-16",
    author: {
      name: "Michael Foster",
      image: UserImage,
    },
    section1: {
      header: "Introduction to Smith Machine Squats",
      text: "The Smith machine has become a staple in many gyms around the world, offering a versatile platform for various strength training exercises. One of the most popular exercises performed on this machine is the Smith machine squat. At first glance, it may resemble a traditional squat, but there are unique characteristics and techniques that differentiate it. The Smith machine squat involves using a fixed barbell attached to vertical guide rails, providing a controlled and guided motion throughout the exercise. This can be beneficial for individuals looking to develop proper squatting form, stability, and muscle engagement.",
    },
    section2: {
      header: "How To Perform Smith Machine Squats",
      text: "Executing Smith machine squats requires attention to detail to ensure both effectiveness and safety. To begin, position yourself beneath the Smith machine barbell, adjusting its height to align with your shoulders or slightly below. Adopt a shoulder-width stance with your feet slightly in front for stability. Secure an overhand grip on the barbell, ensuring it's wider than shoulder-width to maintain control throughout the movement. As you initiate the squat, bend your knees and push your hips back while keeping an upright chest and engaged core. Descend into the squat, aiming to reach a parallel thigh position or slightly lower. To ascend, push through your heels, extending your knees and hips simultaneously. Remember to inhale during the descent phase and exhale as you return to the starting position.",
    },
    section3: {
      header: "Benefits and Precautions of Smith Machine Squats",
      text: "Incorporating Smith machine squats into your workout routine can offer a range of benefits for both novice and experienced gym-goers. The Smith machine provides a consistent barbell path, which can be advantageous for beginners to develop proper squatting form and technique. Additionally, the guided motion of the Smith machine offers stability, reducing the risk of injury, especially when lifting heavier weights or experiencing fatigue. From a muscle engagement perspective, Smith machine squats activate various muscle groups, including the quadriceps, hamstrings, glutes, and core, promoting balanced lower body strength and development. However, it's essential to practice caution and adhere to specific guidelines when performing Smith machine squats. Always prioritize maintaining proper squatting form, avoid excessive forward lean or rounding of the back, and consider warming up with dynamic stretches and mobility exercises specific to the lower body to prepare your muscles and joints for the squatting movement.",
    },
  },
];

function Blog() {
  return (
    <div className="mx-auto  lg:w-4/6 md:w-5/6 w-5/6 px-6  lg:px-8">
      <H2 color={"black-900"}>Blog</H2>
      <div className="mx-auto mb-10 grid max-w-4xl auto-rows-fr grid-cols-1 md:grid-cols-3 sm:grid-cols-2  gap-8  lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {blogPosts.map((post: BlogPostType) => (
          <Link key={post.id} to={`/blog/${post.id}`} className="no-underline">
            <BlogPostContainer
              key={post.id}
              id={post.id}
              image={post.image}
              datetime={post.datetime}
              date={post.date}
              author={post.author}
              section1={post.section1}
              section2={post.section2}
              section3={post.section3}
              title={post.title}
              blogposttitle={post.blogposttitle}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Blog;
