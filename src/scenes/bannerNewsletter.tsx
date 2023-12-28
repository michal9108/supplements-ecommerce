import React from "react";
const BannerNewsletter = () => {



  return (
    <div className="flex w-full "><div className="  flex justify-center items-center  w-full overflow-hidden bg-primary-300 sm:px-3.5 py-5 ">
      <div >
       
        {/* <p className="text-sm  text-white mt-3">
          <strong className="font-semibold">30 DAY MONEY-BACK GUARANTEE</strong>
        </p>
        <p className="text-sm  text-white mt-3 ">
          <strong className="font-semibold"> | </strong>
        </p>
        <p className="text-sm  text-white mt-3 ">
          <strong className="font-semibold">
            IMPROVED MORE THAN 328,600 LIVES
          </strong>
        </p> */}

        <form className="flex gap-y-2 gap-x-2 items-center " > 
        <p className="text-sm  text-white mt-3">
          <strong className="font-semibold text-3xl"> GET THE LATEST UPDATES IN OUR IN INBOX</strong>
        </p>
        <input placeholder="email"></input>
        <button className="bg-black text-white ">SUBMIT</button>
        </form>
        </div>
    </div>
    
    </div> 
  );
};

export default BannerNewsletter;

