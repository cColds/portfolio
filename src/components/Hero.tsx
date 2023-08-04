function Hero() {
  return (
    <div>
      <div className="flex gap-2 text-4xl">
        <h1>
          Hi, I'm <span className="font-inter-bold text-accent">Cold</span>
        </h1>
        <span className="animate-[wiggle_2s_infinite] [transform-origin:70%_70%] inline-block">
          👋
        </span>
      </div>
      <h2 className="text-slate-300 font-inter-bold text-2xl">Web Developer</h2>
    </div>
  );
}

export default Hero;
