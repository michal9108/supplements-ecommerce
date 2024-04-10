<<<<<<< HEAD

=======
import { StarIcon } from "@heroicons/react/24/solid";
>>>>>>> main
import Testimonial from "./Testimonial";

export default function TestimonialsContainer()  {
  
<<<<<<< HEAD

=======
  const starIcon = () => (
    <div className="flex items-center my-4 text-yellow-300 max-md:justify-center">
      <svg
        className="w-6 h-6 me-1"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 22 20"
      >
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
      </svg>
    </div>
  );
>>>>>>> main

  return (
    <>
      <section>
        {/*  TO DO Review element */}
        <div className="flex  items-center justify-center py-2  sm:flex-col md:my-2 md:w-full  ">
<<<<<<< HEAD
          <figure className=" items-center justify-center  flex gap-8 flex-wrap border-box  lg:w-4/6 sm:w-4/6 w-5/6 mx-auto ">
=======
          <figure className=" items-center justify-center  flex gap-8 flex-wrap border-box w-5/6 lg:w-4/6 mx-auto">
>>>>>>> main
            <Testimonial
              user="Bonnie"
              age={25}
              city="Los Angeles"
              src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20%2810%29.jpg"
            />
            <Testimonial
              user="John"
              age={30}
              city="Seattle"
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <Testimonial
              user="Tom"
              age={18}
              city="Denver"
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </figure>
        </div>
      </section>
    </>
  );
}

