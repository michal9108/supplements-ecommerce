import { HeartIcon } from "@heroicons/react/24/solid";
import aboutus from "../../../assets/about-us-1copy.webp"

export default function FeaturesA() {
  
  const features = [
    {
      featuretitle: "Decreased Libido",
      text: "As you grow older, it's typical to notice a decrease in libido. You might discover a reduced interest in sexual activities and fewer occurrences of erections. BUFF PACK recognizes the significance of passion in your life, empowering you to revitalize your sex drive and rekindle that spark.",
    },
    {
      featuretitle: "Apathy & purpose",
      text: "Is your overall well-being impacted by varying energy levels, mood swings, and a lingering sense of dissatisfaction? BUFF PACK is formulated to optimize testosterone levels, rekindle your vitality, and unlock a revitalized sense of fulfillment.",
    },
    {
      featuretitle: "Stubborn Fat ",
      text: "Tired of persistent fat that seems resistant to your efforts? Take charge of your body, eliminate excess fat, and sculpt lean, strong muscles. Experience a body transformation that aligns with your goals.",
    },
    {
      featuretitle: "Lack of Motivation",
      text: "We recognize the difficulties in summoning the drive and inspiration to venture beyond your comfort zone. With Mojo, you'll uncover a fresh sense of purpose and motivation that empowers you to live life to the fullest. ",
    },
    {
      FeatureTitle: "Lack of Motivation",
      text: "We recognize the difficulties in summoning the drive and inspiration to venture beyond your comfort zone. With Mojo, you'll uncover a fresh sense of purpose and motivation that empowers you to live life to the fullest. ",
    },
  ];

  return (
    <section className="bg-primary-100 ">
      <span className="md:w-4/6 sm:w-4/6 xs:w-4/6 xxs:w-5/6 m-auto  ">
        {/* Features Container */}
        <div className="mx-auto max-w-7xl py-2 md:px-10 md:py-32">
          {/* Features Title */}
          <div className="text-center ">
            <h2 className="text-4xl font-bold  italic md:text-5xl my-10">
              Why Buff Pack ?
            </h2>
          </div>
        </div>
      </span>

      <div className="overflow-hidden bg-white sm:py-15">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="mx-auto grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 sm:mx-0 sm:max-w-none sm:grid-cols-2">
            <div className="flex items-start justify-end md:order-first">
              <img
                className="w-[35rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 my-auto"
                src={aboutus}
                alt=""
              />
            </div>

            <div className="md:ml-auto md:pl-4 md:pt-4">
              <div className="lg:max-w-lg">
                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                  {features.map((feature) => (
                    <div key={feature.featuretitle} className="relative pl-9">
                      <dt className=" font-semibold text-gray-900">
                        <HeartIcon
                          className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                          aria-hidden="true"
                        />
                        {feature.featuretitle}
                      </dt>{" "}
                      <dd className="inline">{feature.text}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
