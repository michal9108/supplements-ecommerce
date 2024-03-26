
import Testimonial from "./Testimonial";

export default function TestimonialsContainer()  {
  


  return (
    <>
      <section>
        {/*  TO DO Review element */}
        <div className="flex  items-center justify-center py-2  sm:flex-col md:my-2 md:w-full  ">
          <figure className=" items-center justify-center  flex gap-8 flex-wrap border-box  lg:w-4/6 sm:w-4/6 w-5/6 mx-auto ">
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

