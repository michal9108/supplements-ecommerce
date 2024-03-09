import FeatureBox from "./FeatureBox";
import fitPortrait from "../../../assets/fitPortrait.png";

export default function FeaturesContainer() {
  return (
    <div>
      <section>
        <div className="mx-auto w-5/6 lg:w-4/6 py-8 md:px-10 md:py-24 lg:py-32 flex max-sm:flex-col-reverse">
          {/* Features Title  & Grid */}
          <div className="flex flex-col">
            <h4 className="mx-auto mb-8 mt-4 max-w-lg text-black md:mb-12 lg:mb-16 text-center">
              Buff Pack allows you to:
            </h4>

            <div className="grid gap-3 sm:grid-cols-4  md:grid-rows-1 md:grid-cols-4">
              <FeatureBox
                name="Enhance your libido"
                text="  Take your intimate experiences to new heights.
             
      aliquam, purus sit."
              />
              <FeatureBox
                name="Trim body fat & Develop lean muscle"
                text="   Attain a toned and sculpted physique.
              "
              />
              <FeatureBox
                name="Increase Quality of Life"
                text=" Enhance overall well-being and fulfillment.
            "
              />
              <FeatureBox
                name="Boost your ambition."
                text="Enhance overall well-being and fulfillment."
              />
            </div>
          </div>

          <div className="flex justify-center align-items-center">
            <img src={fitPortrait} className=" rounded-lg w-full"></img>
          </div>
        </div>
      </section>
    </div>
  );
}
