function arrayToObject(arr, key='id') {
    const obj = arr.reduce((acc, el) => {
        acc[el[key]] = el
        return acc
    }, {})
    return obj
}

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