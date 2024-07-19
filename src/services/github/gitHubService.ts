import { repositoriesStore } from "@/shared/repositoriesStore";
import IGitHubService from "@/services/github/IGitHubService";
import _ from "lodash";

export const gitHubService: IGitHubService = {
  getRepos: async () =>
    fetch("https://api.github.com/users/mezdelex/repos?per_page=100")
      .then((response) => response.json())
      .then((data) => (repositoriesStore.repos = data))
      .catch((error) => console.log(error)),
  getUpdatedRepo: () => {
    if (repositoriesStore.repos.length)
      repositoriesStore.repo = _.chain(repositoriesStore.repos)
        .maxBy((repo) => repo.pushed_at)
        .value().name;
  },
  getLastCommit: async () => {
    if (repositoriesStore.repos.length)
      fetch(
        `https://api.github.com/repos/mezdelex/${repositoriesStore.repo}/commits`
      )
        .then((response) => response.json())
        .then((data) => {
          repositoriesStore.date = data[0].commit.author.date.substring(0, 10);
          repositoriesStore.message = data[0].commit.message;
          repositoriesStore.sha = data[0].sha;
          repositoriesStore.link = `https://github.com/mezdelex/${repositoriesStore.repo}/commit/${repositoriesStore.sha}`;
        })
        .catch((error) => console.log(error));
  },
};
