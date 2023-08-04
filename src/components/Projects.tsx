import projectData from "../projectData";
function Projects() {
  return (
    <section className="flex flex-col p-6 w-fit" id="projects">
      <h2 className="text-2xl mb-4 text-left">Projects</h2>
      <div className="flex flex-col gap-6">
        {projectData.map((project) => {
          return (
            <div key={project.id} className="flex flex-col md:flex-row gap-4">
              <div className="flex flex-col gap-4">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="max-w-lg">{project.description}</p>
                <div className="flex gap-4">{project.tech.join(", ")}</div>

                <div className="flex gap-2">
                  <a
                    href={project.links.repo}
                    className="text-indigo-400"
                    target="_blank"
                  >
                    Repo
                  </a>
                  <a
                    href={project.links.site}
                    className="text-indigo-400"
                    target="_blank"
                  >
                    Live
                  </a>
                </div>
              </div>
              <div className="border-[1px] rounded-[4px] overflow-hidden border-slate-400 max-w-[350px] max-h-[350px]">
                <img
                  src={project.image}
                  alt="preview"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
