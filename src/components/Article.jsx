const Article = () => {
  return (
    <div className="">
      <div className="flex max-md:flex-col">
        <div className="w-1/2 border-r-[1.5px] border-b-[1.5px] border-black p-8 max-md:w-auto max-md:border-r-0">
          <h1 className="text-8xl w-3/4 max-md:text-[5rem] kuenstler">
            Learn more about us. Or join us.
          </h1>
        </div>

        <div className="w-1/2 flex flex-col max-md:w-auto">
          <div className=" flex flex-col h-[20rem] border-b-[1.5px] border-black p-8">
            <div className="h-[16rem]" id="inner-div-up">
              <h1 className="text-3xl kuenstler">The Medium blog</h1>
              <p className="text-lg w-3/4 kuenstler">
                Visit our company blog for the latest news, product updates, and
                tips and tricks.
              </p>
            </div>
            <div id="inner-div-down">
              <button className="btn border border-green-400 text-xl text-green-600 p-1 pl-4 rounded-3xl pr-4 kuenstler">
                Read our blog
              </button>
            </div>
          </div>

          {/* first inside second div */}
          <div className="border-b-[1.5px] border-black p-8">
            <div className="h-[12rem]" id="inner-div-up">
              <h1 className="text-3xl kuenstler">Work at Medium</h1>
              <p className="text-lg w-3/4 kuenstler">
                Our team is home to engineers, journalists, artists, and
                creatives of all stripes.
              </p>
            </div>
            <div id="inner-div-down">
              <button className="btn border border-green-400 text-xl text-green-600 p-1 pl-4 rounded-3xl pr-4 kuenstler">
                View open positions
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Second Container */}
      <div className="flex border-b-[1.5px] border-black max-md:flex-col">
        <div className="w-1/2 border-r-[1.5px] border-black p-4 max-md:w-auto max-md:border-r-0">
          <img
            src="https://i.ibb.co/TWz6tB5/Screenshot-2024-04-03-at-1-56-41-AM-removebg-preview.png"
            alt="article-cube"
          />
        </div>
        <div className="w-1/2 flex flex-col justify-between p-8 max-md:w-auto max-md:items-center">
          <h1 className="text-8xl w-4/5 max-md:w-auto kuenstler">
            Read, write, and expand your word.
          </h1>
          <div className="max-md:pt-8">
            <button className="btn bg-green-600 text-white p-1 pl-8 pr-8 rounded-3xl kuenstler">
              Get started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
