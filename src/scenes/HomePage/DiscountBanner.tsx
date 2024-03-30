import ButtonLink from "@/shared/ButtonLink";
import BannerImg from "../../assets/DiscountBanner.webp"

const DiscountBanner = () => {
  return (
    <div
      
    >
      <section
        id=""
        className="slideshow custom-slideshow relative overflow-hidden min-h-[var(--min-h-mobile)] md:min-h-[var(--min-h)]  max-md:hidden pt-0 pb-0"
        data-slideshow-new="template--15668565934145__3d67ac70-4db5-4053-b208-fb0d65c10428"
        data-slideshow-auto-rotate="false"
        data-slideshow-slide-duration="7"
      >
        <div className="relative overflow-hidden max-w-full w-full">
          <div
            className="snap-mandatory snap-x grid relative min-h-[var(--min-h-mobile)] md:min-h-[var(--min-h)] overflow-x-auto scrollbar-none grid-cols-[var(--slideshow-grid-cols-mobile)] md:grid-cols-[var(--slideshow-grid-cols-desktop)]"
            data-slideshow-container=""
          >
            <figure
              id="block--template--18752996770111__3d67ac70-4db5-4053-b208-fb0d65c10428-16837807138d926b16-0"
              data-slideshow-slide="0"
              className="snap-start group w-full h-full relative overflow-hidden bg-theme-bg text-theme-text color-inherit responsive"
            >
              <img src={BannerImg} />

              <figcaption className="absolute z-10 inset-0 w-full h-full md:px-6 py-12">
                <div className="container h-full w-full flex flex-col justify-end items-start text-left">
                  <div className="max-w-2xl grid gap: 8px">
                    <div className="font-group-2 text-theme-overlay-text">
                  
                        <h2 className="text-primary-100">Transformation Starts Here.</h2>
                    
                    </div>

                    <div className="font-group-1 text-theme-overlay-text">
                      <p className="text-primary-100">
                        Select from a dozen discounts.
                      </p>
                    </div>

                    <div className="mt-4 -mx-2 flex flex-col sm:flex-row sm:justify-start text-left ">
                    <ButtonLink
                    //   onClick={}
                    to={"/productpage"}
                    children={"GET DISCOUNT"}
                    disabled={false}
                    className=" bg-primary-100   text-black-900 no-underline  px-6 py-2.5 rounded-lg font-semibold text-xl w-full box-border;
                  "
                  />
                    </div>
                  </div>
                </div>
              </figcaption>
            </figure>
          </div>
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 items-center justify-center z-10 grid grid-flow-col-dense auto-cols-min gap-3 text-theme-bg"></div>
        </div>
      </section>
    </div>
  );
};

export default DiscountBanner;
