import TechStack from "./TechStack";

function About() {
  return (
    <div className="flex flex-col p-6 mb-12" id="about">
      <h1 className="text-4xl mb-4">About</h1>
      <div className="flex flex-col gap-4 text-lg">
        <p>
          Hey there! I'm{" "}
          <span className="font-inter-bold text-accent">Cold</span>, a web
          developer.
        </p>
        <p className="max-w-lg">
          With a firm belief in the power of continuous learning, I am
          enthralled about web development and the infinite opportunities it
          presents. I continuously strive to find new challenges and prospects
          that can enhance my growth and sharpen my skills as a developer.
        </p>
      </div>
      <TechStack />
    </div>
  );
}

export default About;
