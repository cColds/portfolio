import { v4 as uuidv4 } from "uuid";

const techStack = [
  { name: "React", icon: "devicon:react", id: uuidv4() },
  { name: "JavaScript", icon: "devicon:javascript", id: uuidv4() },
  { name: "TypeScript", icon: "logos:typescript-icon", id: uuidv4() },
  { name: "Sass", icon: "devicon:sass", id: uuidv4() },
  { name: "TailwindCSS", icon: "devicon:tailwindcss", id: uuidv4() },
  {
    name: "Firebase",
    icon: "vscode-icons:file-type-firebase",
    id: uuidv4(),
  },

  {
    name: "React Router",
    icon: "devicon:reactrouter",
    id: uuidv4(),
  },
  { name: "npm", icon: "devicon:npm-wordmark", id: uuidv4() },
  { name: "Webpack", icon: "devicon:webpack", id: uuidv4() },

  {
    name: "Vite",
    icon: "vscode-icons:file-type-vite",
    id: uuidv4(),
  },
  {
    name: "Jest",
    icon: "vscode-icons:file-type-jest",
    id: uuidv4(),
  },
  {
    name: "Vitest",
    icon: "vscode-icons:file-type-vitest",
    id: uuidv4(),
  },
  {
    name: "React Testing Library",
    icon: "logos:testing-library",
    id: uuidv4(),
  },
];

export default techStack;
