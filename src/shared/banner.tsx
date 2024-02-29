const Banner = () => {
  return (
    <div className="flex w-full ">
      <div className="  flex justify-center items-center  w-full overflow-hidden bg-black sm:px-3.5   ">
        <div className="flex gap-y-2 gap-x-2 items-center">
          <p className="text-sm text-center text-primary-100 mt-3">
            <strong className="font-semibold">
              30 DAY MONEY-BACK GUARANTEE
            </strong>
          </p>
          <p className="text-sm text-center text-primary-100 mt-3 ">
            <strong className="font-semibold"> | </strong>
          </p>
          <p className="text-sm text-center text-primary-100 mt-3 ">
            <strong className="font-semibold">
              IMPROVED MORE THAN 328,600 LIVES
            </strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
