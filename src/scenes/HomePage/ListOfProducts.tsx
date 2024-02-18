import { ProductType } from "@/shared/types";
import ResponsiveCard from "./ResponsiveCard";
import Proofs from "./Proofs";
import H2 from "@/shared/H2";
import {  useProductCart } from "@/scenes/cart/ShoppingCartContext";
const  { storeItems } = useProductCart(); 

export default function ListOfProducts() {
  return (
    <div className="w-full bg-gray-20">    <div className="  md:w-5/6 mx-auto">
    <section id="benefits" className="mx-auto min-h-full w-full py-1">
      {/* SHOP  */}
      <div className=" flex justify-center ">
        <H2 color="black-900">shop by goal</H2>
      </div>

      <div className="flex sm:flex-col items-center justify-center md:my-2 md:w-full">
        <div className=" items-center justify-center  flex  flex-wrap border-box">
          {" "}
          {storeItems.map((item: ProductType) => {
            return (
              <div key={item.id} className="flex basis-1/6 ">
                <ResponsiveCard {...item} />
              </div>
            );
          })}
        </div>
      </div>
    </section>

    {/* PROOFS HP */}
    <Proofs />
  </div></div>

  );
}
