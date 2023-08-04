function Hero() {
  return (
    <div className="flex place-items-center h-screen">
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-4xl">
            Hi, I'm <span className="font-inter-bold text-accent">Cold</span>
            <span className="animate-[wiggle_2s_infinite] [transform-origin:70%_70%] inline-block ml-3">
              👋
            </span>
          </h1>
          <h2 className="text-slate-300 font-inter-bold text-2xl">
            Web Developer
          </h2>
        </div>

        <a
          className="text-black bg-accent rounded-lg justify-self-start px-4 py-3 w-fit"
          href="#about"
        >
          Get to know me
        </a>
      </div>
    </div>
  );
}

export default Hero;
