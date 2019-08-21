import { normalize } from 'normalizr'
import { issue, repo } from './entities'

export function transformIssues(response) {
    const queryIssuesSchema = [ issue ]
    const issues = response.data.repository.issues.edges.map(el => el.node)
    return normalize(issues, queryIssuesSchema)
}

export function transformRepos(response) {
    const queryReposSchema = [repo]
    response = response.data.user.repositories.edges.map(el => el.node)
    return normalize(response, queryReposSchema)
}