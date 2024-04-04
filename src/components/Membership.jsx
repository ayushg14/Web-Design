const Membership = () => {
  return (
    <div className="bg-green-600">
      <div>
        <div className="p-12 border-b-2 border-black max-md:p-8">
          <h1 className="text-7xl text-center m-auto w-[40%] max-md:w-auto max-md:text-5xl kuenstler">
            Get more with membership.
          </h1>
          <p className="text-sm text-center w-[30%] m-auto mt-8 max-md:w-auto kuenstler">
            Become a Medium to enjoy unlimited access and directly support the
            writers you read most.
          </p>
          <div className="flex justify-center items-center mt-10">
            <button className="btn border text-white border-white rounded-full p-2 pl-6 pr-6 kuenstler">
              See memberships options
            </button>
          </div>
        </div>

        {/* Container */}
        <div className="flex justify-between border-b-2 border-black max-md:flex-col">
          <div className="w-1/2 border-r-2 border-black p-6 max-md:w-auto max-md:border-r-0">
            <h1 className="text-5xl kuenstler">Read as much as you want.</h1>
            <img
              className="h-[10rem] mt-4 mb-4"
              src="https://i.ibb.co/syv7QqL/Screenshot-2024-04-03-at-12-48-34-AM-removebg-preview.png"
              alt=""
            />
            <p className="text-lg kuenstler">
              Enjoy unlimited access to every story across all of your devices.
            </p>
          </div>
          <div className="w-1/2 p-6 max-md:w-auto">
            <h1 className="text-5xl kuenstler">Reward quality content.</h1>
            <img
              className="h-[10rem] mt-4 mb-4"
              src="https://i.ibb.co/BPKWXgj/Screenshot-2024-04-03-at-12-48-41-AM-removebg-preview.png"
              alt=""
            />
            <p className="text-lg kuenstler kuenstler">
              Your membership helps us pay writers, and keeps your experience
              ad-free.
            </p>
          </div>
        </div>
      </div>

      {/* Second Container */}
      <div className="bg-[#BEE2A9] flex items-center border-b-2 border-black max-md:flex-col-reverse">
        <div className="p-8 w-1/2 max-md:w-auto max-md:p-4">
          <h1 className="text-8xl text-start kuenstler">Take Medium with you.</h1>
          <p className="text-md pt-8 pl-4 kuenstler">
            Download our app so you can read whenever you are.
          </p>
          <img
            className="h-[5rem] mt-8"
            src="https://i.ibb.co/FBRyQSr/Screenshot-2024-04-03-at-1-03-07-AM-removebg-preview.png"
            alt=""
          />
        </div>
        <div className="flex justify-center items-end w-1/2 max-md:w-auto">
          <img
            className="w-[22rem]"
            src="https://i.ibb.co/kJg16Gp/Screenshot-2024-04-03-at-1-11-29-AM.png"
            alt="servey-report"
          />
        </div>
      </div>
    </div>
  );
};

export default Membership;
