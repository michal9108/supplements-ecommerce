const BannerNewsletter = () => {
  return (
    <div className="flex w-full ">
      <div className="  flex justify-center items-center  w-full overflow-hidden bg-secondary-500 sm:px-3.5 py-5">
        <div>
          <form className="flex gap-y-2 gap-x-2 items-center justify-between max-md:flex-col ">
            <div className="flex">
              <p className="text-sm  text-primary-100 mt-3 mx-4">
                <strong className="font-semibold text-3xl">
                  GET THE LATEST UPDATES IN OUR IN INBOX
                </strong>
              </p>
            </div>
            <div className="flex gap-4">
              {" "}
              <input
                type="text"
                placeholder="email address"
                className="bg-primary-100 border border-gray-300  text-gray-100 text-md font-semibold rounded-lg  w-full p-2.5  "
                required
              ></input>
              <button className="bg-black  text-primary-100 no-underline px-6 py-2.5 rounded-lg font-semibold text-xl">
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BannerNewsletter;
