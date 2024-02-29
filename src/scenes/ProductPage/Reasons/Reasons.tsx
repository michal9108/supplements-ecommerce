
export default function  Reasons(){
  const reasons = [
    {
      title: "Decreased Libido",
      text: "As you grow older, it's typical to notice a decrease in libido. You might discover a reduced interest in sexual activities and fewer occurrences of erections. BUFF PACK recognizes the significance of passion in your life, empowering you to revitalize your sex drive and rekindle that spark.",
    },
    {
      title: "Apathy & purpose",
      text: "Is your overall well-being impacted by varying energy levels, mood swings, and a lingering sense of dissatisfaction? BUFF PACK is formulated to optimize testosterone levels, rekindle your vitality, and unlock a revitalized sense of fulfillment.",
    },
    {
      title: "Stubborn Fat ",
      text: "Tired of persistent fat that seems resistant to your efforts? Take charge of your body, eliminate excess fat, and sculpt lean, strong muscles. Experience a body transformation that aligns with your goals.",
    },
    {
      title: "Lack of Motivation",
      text: "We recognize the difficulties in summoning the drive and inspiration to venture beyond your comfort zone. With Mojo, you'll uncover a fresh sense of purpose and motivation that empowers you to live life to the fullest. ",
    },
  ];

  return (
    <div className="bg-gray-50 ">
      <section className="w-5/6 m-auto">
        {/* Benefits Container */}
        <div className="mx-auto max-w-7xl py-2 md:px-10 lg:py-32">
          {/* Benefits Title */}
          <div className="text-center ">
            <h2 className="text-4xl font-bold  italic md:text-5xl">
              4 Reasons you need Buff Pack
            </h2>
            <h3 className="mx-auto mb-8 mt-4 max-w-lg text-[#647084] lg:mb-16">
              To help you break through the Barriers of Low Motivation and the
              Lack of Drive.
            </h3>
          </div>

          {/* BENEFITS GRID */}
          <div className="grid gap-3 sm:grid-cols-2  md:grid-rows-1 md:grid-cols-4">
            <></>

            {reasons.map((reason) => (
              <div
                key={reason.title}
                className="grid gap-1 p-2 md:p-6 justify-items-center "
              >
                <span className="border-solid rounded-full border-2 border-primary-300 flex bg-primary-300 items-center justify-center w-5/6 ">
                  <p className="text-xl font-semibold my-auto text-primary-100 text-center">
                    {reason.title}
                  </p>
                </span>

                <p className="text-sm text-[#636262]  flex text-center  w-5/6">
                  {reason.text}
                </p>
              </div>
            ))}
          </div>
          <div className="flex flex-col items-center my-2 ">
            <button
              type="submit"
              className="w-4/6  rounded-md border border-transparent bg-secondary-500 px-8 py-3 text-base font-medium text-primary-100 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 "
            >
              <div className="text-center">
                <p className=" mt-3">Supercharge Your Testosterone</p>
              </div>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

