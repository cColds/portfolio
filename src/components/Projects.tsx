import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import projectData from "../projectData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Projects() {
  return (
    <section className="flex flex-col p-6 mb-12" id="projects">
      <h1 className="text-4xl mb-4">Projects</h1>
      <div className="flex flex-col gap-6">
        {projectData.map((project) => {
          return (
            <div key={project.id} className="flex flex-col md:flex-row gap-4">
              <div className="flex flex-col gap-4">
                <h2 className="text-xl font-inter-bold">{project.title}</h2>
                <p className="max-w-lg">{project.description}</p>
                <div className="flex gap-4">{project.tech.join(", ")}</div>

                <div className="flex gap-4 text-accent">
                  <a href={project.links.repo} target="_blank" title="Github">
                    Code
                  </a>
                  <a
                    href={project.links.site}
                    target="_blank"
                    title="External Link"
                  >
                    Live
                    <FontAwesomeIcon
                      icon={faArrowUpRightFromSquare}
                      className="ml-2 text-white"
                    />
                  </a>
                </div>
              </div>
              <a
                href={project.links.site}
                className="border-[1px] rounded-[4px] overflow-hidden border-slate-400 max-w-[350px] max-h-[350px]"
                target="_blank"
              >
                <img
                  src={project.image}
                  alt="preview"
                  className="h-full w-full object-cover transform hover:scale-125 duration-300 ease-in-out transition-transform cursor-pointer"
                />
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
