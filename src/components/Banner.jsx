const Banner = () => {
  return (
    <div className="bg-black text-white pb-16">
      <div className="flex items-center border-b-[0.5px] border-white max-md:flex-col">
        <div className="w-1/2 border-r-[0.5px] border-white h-full ml-4 max-md:w-auto">
          <h1 className="text-8xl w-3/4 p-8 max-md:text-[5rem]">
            Over 100 million readers and growing
          </h1>
        </div>
        <div className="w-1/2 p-8 max-md:w-auto">
          <img
            className="w-[20rem]"
            src="https://i.ibb.co/TmJgW59/Screenshot-2024-04-02-at-7-57-06-PM-removebg-preview.png"
            alt="user-experience"
          />
          <p className="text-lg w-4/5">
            "Medium is a great place to read and learn from a wide range of
            authors. It's not muddied up by ads. It feels like one of the few
            pure places to go online."
          </p>
          <h4 className="text-xl mt-6">Jackie Colburn</h4>
        </div>
      </div>

      {/* Second Container */}
      <div className="mt-12">
        <h1 className="text-8xl flex m-auto text-center w-4/5 max-md:text-7xl max-md:text-left">
          Create the space for your thinking to take off.
        </h1>
        <p className="text-md w-1/2 text-center m-auto mt-12 max-md:w-[74%]">
          A blank page is also a door. At Medium you can walk through it. It's
          easy and free to share your thinking on any topic, connect with an
          audience, express yourself with a range of publishing tools, and even
          earn money for your work.
        </p>
        <div className="flex justify-center">
          <button className="btn border border-green-400 text-green-400 rounded-2xl p-2 pl-8 pr-8 mt-8">
            Write on Medium
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
