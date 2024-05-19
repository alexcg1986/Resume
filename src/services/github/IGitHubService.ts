export default interface IGitHubService {
  getRepos: () => Promise<void>;
  getUpdatedRepo: () => void;
  getLastCommit: () => Promise<void>;
}
