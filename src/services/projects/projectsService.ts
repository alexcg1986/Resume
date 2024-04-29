import { repositoriesStore } from "@/shared/repositoriesStore";
import { projectsStore } from "@/shared/projectsStore";
import { projectsData } from "@/data/projectsData";
import IProjectsService from "./IProjectsService";
import _ from "lodash";

export const projectsService: IProjectsService = {
  sortProjects: () => {
    if (repositoriesStore.repos.length)
      projectsStore.projects = _.chain(projectsData)
        .map(project => project.id !== ""
          ? { ...project, pushed_at: repositoriesStore.repos.find(repo => repo.name === project.id)!.pushed_at }
          : project)
        .orderBy(project => project.pushed_at, 'desc').value();
    else
      projectsStore.projects = projectsData;
  }
};
