import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";

function App() {
  return (
    <div className="h-full">
      <main className="h-full flex flex-col justify-center items-center">
        <Hero />
        <div>
          <About />
          <Projects />
        </div>
      </main>

      <footer className="w-full flex justify-center h-[50px] p-4 bg-blue-900">
        <a href="https://github.com/cColds" className="flex gap-3 items-center">
          <span className="text-lg">cColds</span>{" "}
          <FontAwesomeIcon icon={faGithub} className="w-5 h-5" />
        </a>
      </footer>
    </div>
  );
}

export default App;
