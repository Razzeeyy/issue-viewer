import { normalize } from 'normalizr'
import { user, repo } from './entities'

export function transformIssues(response) {
    const queryIssuesSchema = repo
    response = response.data.repository
    response.issues = response.issues.edges.map(el => el.node)
    return normalize(response, queryIssuesSchema)
}

export function transformRepos(response) {
    const queryReposSchema = user
    response = response.data.user
    response.repositories = response.repositories.edges.map(el => el.node)
    return normalize(response, queryReposSchema)
}