import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="flex place-items-center h-screen">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
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
            className="text-black bg-accent rounded-lg justify-self-start px-4 py-3 w-fit transition duration-300 ease-in-out hover:opacity-80 hover:active:scale-95"
            href="#about"
          >
            Get to know me
          </a>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
