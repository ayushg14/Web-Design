import Avatar from "./Avatar";
import AvatarSecond from "./AvatarSecond";

const Hero = () => {
  return (
    <div>
      <div className="flex justify-center flex-col items-center h-[14rem] border-t-2 border-black">
        <h1 className="text-6xl text-center">
          Every idea needs a <span className="font-bold">Medium.</span>{" "}
        </h1>
      </div>
      <hr className="border border-black w-screen" />
      <div className="flex items-center justify-between w-screen max-md:flex-col-reverse">
        <div className="w-1/2 p-12border-r-2 h-full border-black max-md:w-auto">
          <p className="p-8 w-[85%] m-auto">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil) by Cicero, written in 45 BC. This book is a
            treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
            amet..", comes from a line in section 1.10.32.
          </p>
        </div>
        <div className="w-1/2 flex justify-center p-12 max-md:w-auto">
          <img
            className="w-[22rem]"
            src="https://i.ibb.co/64gT746/Screenshot-2024-04-02-at-10-03-43-AM-removebg-preview.png"
            alt="word-globe"
          />
        </div>
      </div>
      <hr className="border border-black w-screen" />

      <div className="bg-[#F7D3BB] pb-16">
        <div className=" w-screen">
          <h1 className="text-8xl flex justify-center text-center pt-12 max-md:text-6xl">
            A living network of
            <br />
            curious minds.
          </h1>
          <p className="text-md m-auto text-center p-12 pt-8 w-1/2 max-md:w-auto">
            Anyone can write on Medium. Thought-leaders, journalists, experts,
            and individuals with unique perspectives share their thinking here.
            You'll find pieces by independent writers from around the globe,
            stories we feature and leading authors, and smart takes on our own
            suite of blogs and publications.
          </p>
        </div>
        <div className="">
          <Avatar />
          <AvatarSecond />
          <AvatarSecond />
          <AvatarSecond />
        </div>
      </div>
    </div>
  );
};

export default Hero;
