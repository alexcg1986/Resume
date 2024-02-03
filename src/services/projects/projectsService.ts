import { repositoriesStore } from "@/shared/repositoriesStore";
import { projectsStore } from "@/shared/projectsStore";
import { projectsData } from "@/data/projectsData";
import IProjectsService from "./IProjectsService";
import moment from "moment";

export const projectsService: IProjectsService = {
    sortProjects: () => {
        if (repositoriesStore.repos.length)
            projectsStore.projects = projectsData.map(project => {
                if (project.id !== "")
                    project.pushed_at = repositoriesStore.repos
                        .filter((repo) => repo.name === project.id)[0]?.pushed_at
                        .toUpperCase();

                return project;
            }).sort((previous, next) => moment(next.pushed_at).valueOf() - moment(previous.pushed_at).valueOf());
        else
            projectsStore.projects = projectsData;
    }
};
