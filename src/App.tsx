import Hero from "./components/Hero";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="h-full">
      <main className="h-full flex flex-col justify-center items-center">
        <Hero />
        <Projects />
      </main>
    </div>
  );
}

export default App;
