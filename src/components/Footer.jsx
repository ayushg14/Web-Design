const Footer = () => {
  return (
    <div className="flex flex-col items-center pt-12 pb-6">
      <h1 className="text-4xl font-bold mb-8 cursor-pointer kuenstler">Medium</h1>
      <div className="flex items-center justify-around w-[15%] max-sm:w-[13rem] max-md:w-[20rem]">
        <a className="cursor-pointer kuenstler">Terms</a>
        <a className="cursor-pointer kuenstler">Privacy</a>
        <a className="cursor-pointer kuenstler">Help</a>
      </div>
    </div>
  );
};

export default Footer;
