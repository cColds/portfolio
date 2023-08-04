import projectData from "../projectData";
function Projects() {
  return (
    <section className="flex flex-col p-6 mb-6" id="projects">
      <h1 className="text-4xl mb-4">Projects</h1>
      <div className="flex flex-col gap-6">
        {projectData.map((project) => {
          return (
            <div key={project.id} className="flex flex-col md:flex-row gap-4">
              <div className="flex flex-col gap-4">
                <h2 className="text-xl font-inter-bold">{project.title}</h2>
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
