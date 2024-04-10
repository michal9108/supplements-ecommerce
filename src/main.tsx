import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import SuccessPage from "./pages/SuccessPage";
import AccountPage from "./pages/AccountPage";
import { RouterProvider } from "react-router-dom";
import CancelPage from "./pages/CancelPage";
<<<<<<< HEAD
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import Returns from "./pages/Returns";
import WishlistPage from "./pages/WishlistPage";
import RedirectIfAuthenticated from "../middleware/RedirectIfAuthenticated";
import RequireAuth from "../middleware/RequireAuth";
import BlogPost from "./scenes/BlogPost";
import BlogImage1 from "./assets/sumo-squat-tile.jpg";
import BlogImage2 from "./assets/blog2.jpg";
import BlogImage3 from "./assets/blog3.jpg";
import UserImage from "./assets/user-reviews.png";
=======
>>>>>>> main

const isUserSignedIn = !!localStorage.getItem("token");

const blogPosts = [
  {
    id: 1,
    title: "EVERYTHING YOU NEED TO KNOW ABOUT SMITH MACHINE SQUATS",
    href: "#",
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
    href: "#",
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
      header: "Introduction to Zone 2 Cardio",
      text: "Zone 2 cardio training has gained significant attention in the fitness community due to its numerous benefits. Unlike high-intensity workouts, zone 2 training focuses on maintaining a moderate heart rate range, allowing individuals to sustain longer durations of exercise without excessive fatigue. This approach emphasizes aerobic metabolism, promoting efficient fat utilization, improved cardiovascular health, and enhanced endurance.",
    },
    section2: {
      header: "Implementing Zone 2 Cardio into Your Routine",
      text: "Incorporating zone 2 cardio into your training regimen requires understanding your target heart rate zone and selecting appropriate activities. To identify your zone 2 heart rate, subtract your age from 180, adjusting for individual factors such as fitness level and health conditions. Aim to engage in activities that elevate your heart rate to this calculated range, such as brisk walking, cycling, swimming, or rowing, for extended periods. Consistency is key to reaping the benefits of zone 2 training, gradually increasing the duration and intensity as your fitness improves.",
    },
    section3: {
      header: "Benefits of Zone 2 Cardio",
      text: "Embracing zone 2 cardio offers a plethora of advantages for individuals of all fitness levels. It enhances fat burning capabilities, aiding in weight management and body composition improvements. Additionally, zone 2 training strengthens the heart and lungs, boosting overall cardiovascular health and reducing the risk of chronic diseases. Furthermore, this method fosters mental resilience, as sustained, moderate-intensity exercise can enhance mood, alleviate stress, and improve cognitive function. However, it's crucial to approach zone 2 training with patience and consistency, gradually building endurance and avoiding overexertion to ensure long-term success and sustainability.",
    },
  },
  {
    id: 3,
    title: "How To Do Sumo Squats To Target The Inner Thighs",
    href: "#",
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
      header: "Introduction to Sumo Squats",
      text: "Sumo squats have emerged as a popular variation of traditional squats, focusing on engaging the inner thigh muscles, or adductors. This stance involves positioning your feet wider than shoulder-width apart, with toes pointing outward, resembling the stance of a sumo wrestler. By adopting this unique stance, sumo squats target the inner thighs more intensely, promoting balanced lower body strength and addressing muscle imbalances often overlooked in conventional squatting exercises.",
    },
    section2: {
      header: "Mastering the Sumo Squat Technique",
      text: "Executing the sumo squat requires attention to form and technique to maximize effectiveness and minimize the risk of injury. Start by standing with your feet wider than shoulder-width apart and toes pointed outward at a 45-degree angle. Maintain an upright posture with your chest lifted, engaging your core for stability. As you descend into the squat, bend your knees and push your hips back, ensuring they track over your ankles. Aim to lower until your thighs are parallel to the ground or slightly lower, then push through your heels to return to the starting position. Remember to keep your knees in line with your toes throughout the movement and breathe steadily to maintain control.",
    },
    section3: {
      header: "Benefits of Sumo Squats",
      text: "Incorporating sumo squats into your fitness routine can offer a myriad of benefits beyond targeting the inner thighs. This exercise engages multiple muscle groups, including the quadriceps, hamstrings, glutes, and core, fostering comprehensive lower body development. Additionally, sumo squats enhance hip mobility and flexibility, supporting functional movements and reducing the risk of injury during daily activities. Moreover, by incorporating various equipment, such as dumbbells, barbells, or machines, you can customize the intensity and resistance, catering to your fitness level and goals. However, as with any exercise, it's essential to prioritize proper form, gradually increase intensity, and listen to your body to ensure safe and effective performance.",
    },
  },
];

const router = createBrowserRouter([
  {
    path: "/",
    element: isUserSignedIn ? (
      <RequireAuth Component={<App />} />
    ) : (
      <RedirectIfAuthenticated Component={<SignInPage />} />
    ),
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "/productpage",
        element: <ProductPage />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/blog/:postId",
        element: <BlogPost posts={blogPosts} />,
      },
      {
        path: "/terms-of-service",
        element: <TermsOfService />,
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/returns-and-faq",
        element: <Returns />,
      },
      {
        path: "/success",
        element: <SuccessPage />,
      },
      {
        path: "/cancel",
        element: <CancelPage />,
      },
      {
        path: "/account",
        element: isUserSignedIn ? (
          <RequireAuth Component={<AccountPage />} />
        ) : (
          <RedirectIfAuthenticated Component={<SignInPage />} />
        ),
      },
      {
        path: "/wishlist",
        element: isUserSignedIn ? (
          <RequireAuth Component={<WishlistPage />} />
        ) : (
          <RedirectIfAuthenticated Component={<SignInPage />} />
        ),
      },
    ],
  },
  {
    path: "/signup",
    element: <SignUpPage />,
  },
  {
    path: "/signin",
    element: <SignInPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />,
);
