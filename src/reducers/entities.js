import merge from 'lodash/merge'

const defaultState = {
    users: {},
    repos: {},
    issues: {}
}

export default function entitiesReducer(state=defaultState, {payload, error}) {
    //TODO: FIXME: this may not trigger proper re-renders when used with selectors, consider splitting into subreducers
    if(!error && payload && payload.entities) {
        return merge({}, state, payload.entities)
    }
    return state
}


export function getRepos(state) {
    return state.repos || {}
}

export function getIssues(state) {
    return state.issues || {}
}

export function getUsers(state) {
    return state.users || {}
}

export function getRepoByOwnerAndName(state, owner, name) {
    const repos = getRepos(state)
    const matching = Object.values(repos).filter(
        el => el.owner === owner &&
        el.name === name
    )
    return matching.length ? matching[0] : {}
}

export function getIssuesForRepoByOwnerAndName(state, owner, name) {
    const issuesById = getIssues(state)
    const repo = getRepoByOwnerAndName(state, owner, name)
    const issues = repo.issues || []
    return issues.map(el => issuesById[el])
}