import { arrayToObject } from '../util'

export function transformIssues(response) {
    const issueEdges = response.data.repository.issues.edges
    const issuesArray = issueEdges.map(el => el.node)
    const issues = arrayToObject(issuesArray)
    return {
        entities: {
            issues
        },
        result: Object.keys(issues)
    }
}

export function transformRepos(response) {
    const reposEdges = response.data.user.repositories.edges
    const reposArray = reposEdges.map(el => el.node)
    const repos = arrayToObject(reposArray)
    return {
        entities: {
            repos
        },
        result: Object.keys(repos)
    }
}