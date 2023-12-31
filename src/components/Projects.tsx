import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import projectData from "../projectData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

const formatTech = (...tech: string[]) => {
  if (tech.length === 1) return tech[0];
  if (tech.length === 2) return `${tech[0]} and ${tech[1]}`;

  const lastTech = tech.pop();
  return `${tech.join(", ")}, and ${lastTech}`;
};

function Projects() {
  return (
    <section className="flex flex-col p-6 mb-12" id="projects">
      <h1 className="text-4xl mb-4">Projects</h1>
      <div className="flex flex-col gap-6">
        {projectData.map((project) => {
          const tech = formatTech(...project.tech);

          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col md:flex-row justify-between gap-2">
                <div className="flex flex-col gap-4 py-4">
                  <h2 className="text-xl font-inter-bold">{project.title}</h2>
                  <p className="max-w-lg">{project.description}</p>
                  <p className="flex gap-4">Built with {tech}</p>

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
                    loading="lazy"
                  />
                </a>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
