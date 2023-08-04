import { Icon } from "@iconify/react/dist/iconify.js";
import techStack from "../techStack";

function TechStack() {
  return (
    <div className="mt-6">
      <h2 className="text-2xl mb-6">Tech Stack</h2>
      <div className="flex flex-wrap gap-4">
        {techStack.map((tech) => {
          return (
            <div key={tech.id} className="flex flex-col items-center gap-2">
              <Icon icon={tech.icon} className="w-10 h-10" name={tech.name} />
              <p className="text-sm">{tech.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TechStack;
