export default interface IGitHubService {
    getRepos: () => void;
    getUpdatedRepo: () => void;
    getLastCommit: () => void;
}
