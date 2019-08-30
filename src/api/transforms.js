import { normalize } from 'normalizr'
import { user, repo } from './entities'

export function transformIssues(response) {
    const queryIssuesSchema = repo
    const responseRepo = response.data.repository
    const transformedRepo = {
        ...responseRepo,
        issues: responseRepo.issues.edges.map(el => ({
            ...el.node,
            _cursor: el.cursor
        }))
    }
    return normalize(transformedRepo, queryIssuesSchema)
}

export function transformRepos(response) {
    const queryReposSchema = user
    const responseUser = response.data.user
    const transformedUser = {
        ...responseUser,
        repositories: responseUser.repositories.edges.map(el => el.node)
    }
    return normalize(transformedUser, queryReposSchema)
}

export function transformIssue(response) {
    const queryIssuesSchema = repo
    const responseRepo = response.data.repository
    const transformedRepo = {
        ...responseRepo,
        issues: [responseRepo.issue]
    }
    return normalize(transformedRepo, queryIssuesSchema)
}