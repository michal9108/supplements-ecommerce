import { useEffect, useState } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import slider1 from "@/assets/HomeBanner1.webp";
import slider2 from "@/assets/homeSlider9.png";
import slider3 from "@/assets/homeSlider10.png";
import slider4 from "@/assets/homeSlider11.png";
import slider5 from "@/assets/HomeBanner3.webp";

import slider8 from "@/assets/HomeBanner2.webp";
export default function HomeCarousel() {
  const [isAboveMd, setIsAboveMd] = useState(false);

  const updateWindowSize = () => {
    setIsAboveMd(window.innerWidth >= 1060);
  };

  useEffect(() => {
    updateWindowSize();
    window.addEventListener("resize", updateWindowSize);

    return () => {
      window.removeEventListener("resize", updateWindowSize);
    };
  }, []);

  const slideImages = isAboveMd
    ? [
        { src: slider1 },
        { src: slider2 },
        { src: slider3 },
        { src: slider4 },
        { src: slider5 },
      ]
    : [{ src: slider8 }];

  return (
    <section className="relative ">
      <Slide>
        {slideImages.map((slideImage, index) => (
          <div key={index} style={{ position: "relative" }}>
            <img src={slideImage.src} className="w-full h-full object-cover" />
            <div className="absolute top-0 left-0 w-full height-full bg-gradient-to-br from-black via-black to-transparent pointer-events-none "></div>
          </div>
        ))}
      </Slide>

      <div className="max-w-2xl grid gap-2 absolute bottom-10 xs:left-10 text-primary-100 p-4">
        <div className="font-group-2 text-theme-overlay-text ">
          <p className="_p text-black-900" >
            <span className="relative inline-flex items-center h-[1em] align-middle  justify-center">
              <svg
                className="w-auto h-full"
                viewBox="0 0 15 15"
                xmlns="http://www.w3.org/2000/svg"
                fill="#fde047"
              >
                <path
                  d="M7.38091 0.0973503C7.10868 -0.0324501 6.7924 -0.0324501 6.52016 0.0973503C6.28482 0.20956 6.15506 0.404385 6.08962 0.511266C6.02198 0.621759 5.95253 0.762511 5.88485 0.899703L4.4477 3.81123L1.23299 4.2811C1.08167 4.30319 0.926395 4.32585 0.800452 4.35614C0.678611 4.38543 0.453338 4.4488 0.274064 4.63803C0.0666695 4.85694 -0.0308653 5.15775 0.00861507 5.45671C0.0427423 5.71513 0.187972 5.89863 0.269439 5.99385C0.35365 6.09227 0.466084 6.20174 0.57566 6.30842L2.90086 8.57316L2.35221 11.772C2.32631 11.9228 2.29974 12.0776 2.28951 12.2068C2.27962 12.3317 2.27006 12.5656 2.39452 12.7948C2.53849 13.0598 2.79441 13.2457 3.09099 13.3007C3.3474 13.3483 3.56692 13.2668 3.68268 13.2188C3.80238 13.1691 3.94132 13.096 4.07676 13.0248L6.95054 11.5135L9.82433 13.0248C9.95976 13.096 10.0987 13.1691 10.2184 13.2188C10.3342 13.2668 10.5537 13.3483 10.8101 13.3007C11.1067 13.2457 11.3626 13.0598 11.5065 12.7948C11.631 12.5656 11.6215 12.3317 11.6116 12.2068C11.6013 12.0776 11.5748 11.9229 11.5489 11.772L11.0002 8.57316L13.3254 6.3084C13.435 6.20172 13.5474 6.09226 13.6316 5.99385C13.7131 5.89863 13.8583 5.71513 13.8925 5.45671C13.9319 5.15775 13.8344 4.85694 13.627 4.63803C13.4477 4.4488 13.2225 4.38543 13.1006 4.35614C12.9747 4.32585 12.8194 4.30319 12.6681 4.2811L9.45338 3.81123L8.01625 0.899753C7.94856 0.762552 7.8791 0.621767 7.81145 0.511266C7.74601 0.404385 7.61626 0.20956 7.38091 0.0973503Z"
                  fill="var(--color-review-stars--hex)"
                ></path>
              </svg>
              <svg
                className="w-auto h-full"
                viewBox="0 0 15 15"
                xmlns="http://www.w3.org/2000/svg"
                fill="#fde047"
              >
                <path
                  d="M7.38091 0.0973503C7.10868 -0.0324501 6.7924 -0.0324501 6.52016 0.0973503C6.28482 0.20956 6.15506 0.404385 6.08962 0.511266C6.02198 0.621759 5.95253 0.762511 5.88485 0.899703L4.4477 3.81123L1.23299 4.2811C1.08167 4.30319 0.926395 4.32585 0.800452 4.35614C0.678611 4.38543 0.453338 4.4488 0.274064 4.63803C0.0666695 4.85694 -0.0308653 5.15775 0.00861507 5.45671C0.0427423 5.71513 0.187972 5.89863 0.269439 5.99385C0.35365 6.09227 0.466084 6.20174 0.57566 6.30842L2.90086 8.57316L2.35221 11.772C2.32631 11.9228 2.29974 12.0776 2.28951 12.2068C2.27962 12.3317 2.27006 12.5656 2.39452 12.7948C2.53849 13.0598 2.79441 13.2457 3.09099 13.3007C3.3474 13.3483 3.56692 13.2668 3.68268 13.2188C3.80238 13.1691 3.94132 13.096 4.07676 13.0248L6.95054 11.5135L9.82433 13.0248C9.95976 13.096 10.0987 13.1691 10.2184 13.2188C10.3342 13.2668 10.5537 13.3483 10.8101 13.3007C11.1067 13.2457 11.3626 13.0598 11.5065 12.7948C11.631 12.5656 11.6215 12.3317 11.6116 12.2068C11.6013 12.0776 11.5748 11.9229 11.5489 11.772L11.0002 8.57316L13.3254 6.3084C13.435 6.20172 13.5474 6.09226 13.6316 5.99385C13.7131 5.89863 13.8583 5.71513 13.8925 5.45671C13.9319 5.15775 13.8344 4.85694 13.627 4.63803C13.4477 4.4488 13.2225 4.38543 13.1006 4.35614C12.9747 4.32585 12.8194 4.30319 12.6681 4.2811L9.45338 3.81123L8.01625 0.899753C7.94856 0.762552 7.8791 0.621767 7.81145 0.511266C7.74601 0.404385 7.61626 0.20956 7.38091 0.0973503Z"
                  fill="var(--color-review-stars--hex)"
                ></path>
              </svg>
              <svg
                className="w-auto h-full"
                viewBox="0 0 15 15"
                xmlns="http://www.w3.org/2000/svg"
                fill="#fde047"
              >
                <path
                  d="M7.38091 0.0973503C7.10868 -0.0324501 6.7924 -0.0324501 6.52016 0.0973503C6.28482 0.20956 6.15506 0.404385 6.08962 0.511266C6.02198 0.621759 5.95253 0.762511 5.88485 0.899703L4.4477 3.81123L1.23299 4.2811C1.08167 4.30319 0.926395 4.32585 0.800452 4.35614C0.678611 4.38543 0.453338 4.4488 0.274064 4.63803C0.0666695 4.85694 -0.0308653 5.15775 0.00861507 5.45671C0.0427423 5.71513 0.187972 5.89863 0.269439 5.99385C0.35365 6.09227 0.466084 6.20174 0.57566 6.30842L2.90086 8.57316L2.35221 11.772C2.32631 11.9228 2.29974 12.0776 2.28951 12.2068C2.27962 12.3317 2.27006 12.5656 2.39452 12.7948C2.53849 13.0598 2.79441 13.2457 3.09099 13.3007C3.3474 13.3483 3.56692 13.2668 3.68268 13.2188C3.80238 13.1691 3.94132 13.096 4.07676 13.0248L6.95054 11.5135L9.82433 13.0248C9.95976 13.096 10.0987 13.1691 10.2184 13.2188C10.3342 13.2668 10.5537 13.3483 10.8101 13.3007C11.1067 13.2457 11.3626 13.0598 11.5065 12.7948C11.631 12.5656 11.6215 12.3317 11.6116 12.2068C11.6013 12.0776 11.5748 11.9229 11.5489 11.772L11.0002 8.57316L13.3254 6.3084C13.435 6.20172 13.5474 6.09226 13.6316 5.99385C13.7131 5.89863 13.8583 5.71513 13.8925 5.45671C13.9319 5.15775 13.8344 4.85694 13.627 4.63803C13.4477 4.4488 13.2225 4.38543 13.1006 4.35614C12.9747 4.32585 12.8194 4.30319 12.6681 4.2811L9.45338 3.81123L8.01625 0.899753C7.94856 0.762552 7.8791 0.621767 7.81145 0.511266C7.74601 0.404385 7.61626 0.20956 7.38091 0.0973503Z"
                  fill="var(--color-review-stars--hex)"
                ></path>
              </svg>
              <svg
                className="w-auto h-full"
                viewBox="0 0 15 15"
                xmlns="http://www.w3.org/2000/svg"
                fill="#fde047"
              >
                <path
                  d="M7.38091 0.0973503C7.10868 -0.0324501 6.7924 -0.0324501 6.52016 0.0973503C6.28482 0.20956 6.15506 0.404385 6.08962 0.511266C6.02198 0.621759 5.95253 0.762511 5.88485 0.899703L4.4477 3.81123L1.23299 4.2811C1.08167 4.30319 0.926395 4.32585 0.800452 4.35614C0.678611 4.38543 0.453338 4.4488 0.274064 4.63803C0.0666695 4.85694 -0.0308653 5.15775 0.00861507 5.45671C0.0427423 5.71513 0.187972 5.89863 0.269439 5.99385C0.35365 6.09227 0.466084 6.20174 0.57566 6.30842L2.90086 8.57316L2.35221 11.772C2.32631 11.9228 2.29974 12.0776 2.28951 12.2068C2.27962 12.3317 2.27006 12.5656 2.39452 12.7948C2.53849 13.0598 2.79441 13.2457 3.09099 13.3007C3.3474 13.3483 3.56692 13.2668 3.68268 13.2188C3.80238 13.1691 3.94132 13.096 4.07676 13.0248L6.95054 11.5135L9.82433 13.0248C9.95976 13.096 10.0987 13.1691 10.2184 13.2188C10.3342 13.2668 10.5537 13.3483 10.8101 13.3007C11.1067 13.2457 11.3626 13.0598 11.5065 12.7948C11.631 12.5656 11.6215 12.3317 11.6116 12.2068C11.6013 12.0776 11.5748 11.9229 11.5489 11.772L11.0002 8.57316L13.3254 6.3084C13.435 6.20172 13.5474 6.09226 13.6316 5.99385C13.7131 5.89863 13.8583 5.71513 13.8925 5.45671C13.9319 5.15775 13.8344 4.85694 13.627 4.63803C13.4477 4.4488 13.2225 4.38543 13.1006 4.35614C12.9747 4.32585 12.8194 4.30319 12.6681 4.2811L9.45338 3.81123L8.01625 0.899753C7.94856 0.762552 7.8791 0.621767 7.81145 0.511266C7.74601 0.404385 7.61626 0.20956 7.38091 0.0973503Z"
                  fill="var(--color-review-stars--hex)"
                ></path>
              </svg>
              <svg
                className="w-auto h-full"
                viewBox="0 0 15 15"
                xmlns="http://www.w3.org/2000/svg"
                fill="#fde047"
              >
                <path
                  d="M7.38091 0.0973503C7.10868 -0.0324501 6.7924 -0.0324501 6.52016 0.0973503C6.28482 0.20956 6.15506 0.404385 6.08962 0.511266C6.02198 0.621759 5.95253 0.762511 5.88485 0.899703L4.4477 3.81123L1.23299 4.2811C1.08167 4.30319 0.926395 4.32585 0.800452 4.35614C0.678611 4.38543 0.453338 4.4488 0.274064 4.63803C0.0666695 4.85694 -0.0308653 5.15775 0.00861507 5.45671C0.0427423 5.71513 0.187972 5.89863 0.269439 5.99385C0.35365 6.09227 0.466084 6.20174 0.57566 6.30842L2.90086 8.57316L2.35221 11.772C2.32631 11.9228 2.29974 12.0776 2.28951 12.2068C2.27962 12.3317 2.27006 12.5656 2.39452 12.7948C2.53849 13.0598 2.79441 13.2457 3.09099 13.3007C3.3474 13.3483 3.56692 13.2668 3.68268 13.2188C3.80238 13.1691 3.94132 13.096 4.07676 13.0248L6.95054 11.5135L9.82433 13.0248C9.95976 13.096 10.0987 13.1691 10.2184 13.2188C10.3342 13.2668 10.5537 13.3483 10.8101 13.3007C11.1067 13.2457 11.3626 13.0598 11.5065 12.7948C11.631 12.5656 11.6215 12.3317 11.6116 12.2068C11.6013 12.0776 11.5748 11.9229 11.5489 11.772L11.0002 8.57316L13.3254 6.3084C13.435 6.20172 13.5474 6.09226 13.6316 5.99385C13.7131 5.89863 13.8583 5.71513 13.8925 5.45671C13.9319 5.15775 13.8344 4.85694 13.627 4.63803C13.4477 4.4488 13.2225 4.38543 13.1006 4.35614C12.9747 4.32585 12.8194 4.30319 12.6681 4.2811L9.45338 3.81123L8.01625 0.899753C7.94856 0.762552 7.8791 0.621767 7.81145 0.511266C7.74601 0.404385 7.61626 0.20956 7.38091 0.0973503Z"
                  fill="var(--color-review-stars--hex)"
                ></path>
              </svg>
            </span>
            TRUSTED BY 170,000+ ATHLETES WORLDWIDE
          </p>
        </div>

        <div className="font-group-2 text-theme-overlay-text text-black-900">
          <h1 className="font-bold size-lg">
            Elite Supplements, <div>Backed by Science.</div>
          </h1>
        </div>
        <div className="font-group-1 text-theme-overlay-text">
          <p className="_p text-black-900">
            To help you get stronger, live healthier, and become a better you.{" "}
            <div>Take the fitness quiz below to start your transformation.</div>
          </p>
        </div>

        <div className="mt-4  flex flex-col sm:flex-row sm:justify-start text-left w-full ">
          <button className="rounded-lg bg-secondary-500 px-20 py-3 text-primary-100 no-underline font-semibold text-xl">
            BUY NOW
          </button>
        </div>
      </div>
    </section>
  );
}
