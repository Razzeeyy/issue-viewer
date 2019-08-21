import { arrayToObject } from '../../util'

export function issues(response) {
    const issueEdges = response.data.repository.issues.edges
    const issuesArray = issueEdges.map(el => el.node)
    const issues = arrayToObject(issuesArray, 'number')
    return {
        entities: {
            issues
        },
        result: Object.keys(issues)
    }
}
