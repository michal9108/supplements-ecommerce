
import homebecomebuffimg from "@/assets/becomebuff.png";

export default function InfoSales() {
  return (
    <>
      {/* SALES INFO */}
      <section className="mx-auto min-h-full w-5/6 lg:w-4/6 py-1">
        <div className="flex flex-wrap items-center  justify-center relative">
          {/* Image */}
          <span className="flex  p-2 lg:my-8 lg:w-1/2 md:w-1/2 ">
            <img
              className="w-full"
              alt="benefits-page-graphic"
              src={homebecomebuffimg}
            />
          </span>

          {/* Text Content */}
          <span className="flex w-full md:w-1/2 flex-wrap mt-8">
            <div className="relative w-full md:text-left   sm:text-left xs:text-center xxs:text-center">
              <h2 className="text-bold font-4xl  xss:text-3xl xs:text-4xl font-black py-8 uppercase text-secondary-100 ">
                BECOME FINALLY <span className="text-primary-300">BUFF</span>
              </h2>
            </div>

            <div className="w-full">
              <p className="text-md ">
                Boosting your testosterone levels naturally can be a powerful
                advantage, enhancing ambition, increasing libido, reducing fat,
                promoting muscle growth, and overall improving your quality of
                life.
                <br />
                <br />
                Regrettably, testosterone levels have seen a consistent decline
                over the past three decades. Simply put, your father and
                grandfathers likely had higher testosterone levels compared to
                you. This decline can be attributed to various factors,
                including elevated chronic stress, higher body fat levels, and a
                significant rise in environmental estrogens.
                <br />
                <br />
                Compounds like phthalates, with estrogenic properties, disrupt
                endocrine function and have infiltrated food and scented
                products on a large scale. This implies that even if you adopt
                all the right measures—such as prioritizing sleep, maintaining
                proper nutrition, ensuring adequate vitamin D levels, and
                engaging in regular exercise—you may still find it challenging
                to elevate your testosterone levels to optimal levels.
              </p>
            </div>

            {/* BUTTON */}
            <div className="relative w-full my-8 max-sm:mx-auto flex sm:justify-start  xs:justify-center  xxs:justify-center items-center">
              <button className="rounded-lg bg-secondary-500 px-20 py-3 text-primary-100 no-underline font-semibold text-xl" >
                BUY NOW
              </button>
            </div>
          </span>
        </div>
      </section>
    </>
  );
}
