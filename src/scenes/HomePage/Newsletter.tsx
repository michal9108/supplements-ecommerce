import { FormEvent, useState } from "react";


import Product from "../ProductPage/ProductCard/Product";
import { useProductCart } from "../cart/ProductCartContext";

export default function Newsletter() {
  
const {setnewsletterModalShow} = useProductCart();
const [email, setEmail] = useState("");
const handleModalSubmit = (e:FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setnewsletterModalShow(true)

}

  return (
    <div className="flex w-full ">
      <div className="  flex justify-center items-center  w-full overflow-hidden bg-secondary-500  py-5 ">
        <div>
          <form
            className="flex w-full 
          gap-y-2
           gap-x-2
            items-center 
            justify-center 
             max-md:flex-col "
             onSubmit={handleModalSubmit}
          >
            <div className="flex text-center">
              <p className="text-sm  text-primary-100 mt-3 mx-4">
                <strong className="font-semibold text-3xl">
                  GET THE LATEST UPDATES IN OUR IN INBOX
                </strong>
              </p>
            </div>
            <div >
              {" "}

          
              <input
                type="email"
                placeholder="email address"
                className="bg-primary-100 border border-gray-300  text-gray-100 text-md font-semibold rounded-lg  w-full p-2.5  "
                required
                onChange={(e) => setEmail(e.target.value)}
              ></input>
              <button className="bg-black  text-primary-100 no-underline px-6 py-2.5 rounded-lg font-semibold text-xl" type="submit">
                SUBMIT
              </button>
             
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
