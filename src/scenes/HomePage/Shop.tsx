
import { ProductType } from "@/shared/types";
import ResponsiveCard from "./ResponsiveCard";

import H2 from "@/shared/H2";

import { useProductCart } from "@/scenes/cart/ProductCartContext";

export default function Shop() {
  const { storeItems } = useProductCart();

  return (
    
    <div className="w-full bg-gray-20">
         {/* SHOP - LIST OF PRODUCTS */}
      {" "}
      <div className=" lg:w-4/6 md:w-5/6 sm:w-5/6 xs:w-5/6  xxs:w-5/6 mx-auto ">
        <section id="benefits" className="mx-auto min-h-full w-full py-1">
       
          <div className=" flex justify-center ">
            <H2 color="black-900">shop by goal</H2>
          </div>

          <div className="flex sm:flex-col items-center justify-center md:my-2 md:w-full">
            <div className=" items-center justify-center  flex  flex-wrap border-box">
              {" "}
              {storeItems.length > 0 &&
                storeItems.map((item: ProductType) => (
                  <div key={item._id} className="flex basis-1/6">
                    <ResponsiveCard {...item} />
                  </div>
                ))}
            </div>
          </div>
        </section>

      
      </div>
    </div>
  );
}
