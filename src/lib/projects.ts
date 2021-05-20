import fs from "fs";
import gray from "gray-matter";
import path from "path";
import { Project } from "../types";
export const projectsPath = path.join(process.cwd(), "projects");

export const getProjectUrls = () => {
  const items = fs.readdirSync(projectsPath);
  const urls = items.map((item) => path.join(projectsPath, item));
  return urls;
};

export const getContentProject = (project: string) => {
  const content = fs.readFileSync(project, "utf-8");
  const p = gray(content);
  return { ...(p.data as Project), content: p.content };
};

export const getTopProjects = () => {
  const projects = getProjectUrls();
  const topProjects: Project[] = [];
  for (const p of projects) {
    const project = getContentProject(p);
    if (project.isTop) topProjects.push(project);
  }

  return topProjects;
};
