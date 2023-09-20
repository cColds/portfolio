import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Blogs from "./components/Blogs";
import Home from "./components/Home";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="top-0 sticky z-50 bg-blue-950/80 backdrop-blur-sm">
        <Nav />
      </header>

      <main className="h-full flex flex-col justify-center items-center">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
        </Routes>
      </main>

      <footer className="mt-auto w-full flex justify-center h-[50px] p-4 bg-blue-900">
        <a href="https://github.com/cColds" className="flex gap-3 items-center">
          <span className="text-lg">cColds</span>{" "}
          <FontAwesomeIcon icon={faGithub} className="w-5 h-5" />
        </a>
      </footer>
    </div>
  );
}

export default App;
