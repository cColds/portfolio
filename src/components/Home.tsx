import About from "./About";
import Hero from "./Hero";
import Projects from "./Projects";

function Home() {
  return (
    <>
      <Hero />

      <div>
        <About />
        <Projects />
      </div>
    </>
  );
}

export default Home;
