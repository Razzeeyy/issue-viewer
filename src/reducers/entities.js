import { combineReducers } from 'redux'
import { uniq, merge } from 'lodash'

function createEntityReducer(name, merger=defaultMerger) {
    return (state={}, { payload, error }) => {
        if(!error && payload && payload.entities) {
            const entities = payload.entities[name]
            if(entities) {
                return merger(state, entities)
            }
        }
        return state
    }
}

function defaultMerger(state, newState) {
    return {
        ...state,
        ...newState
    }
}

function usersMerger(state, newState) {
    return merge({}, state, newState)
}

function reposMerger(state, newState) {
    return Object.values(newState).reduce((state, repo) => {
        state[repo.id] = {
            ...state[repo.id],
            ...repo,
            issues: uniq([
                ...(state[repo.id] && state[repo.id].issues) || [],
                ...repo.issues || []
            ])
        }
        return state
    }, state)
}

export default combineReducers({
    users: createEntityReducer('users', usersMerger),
    repos: createEntityReducer('repos', reposMerger),
    issues: createEntityReducer('issues')
})

export function getRepos(state) {
    return state.repos || {}
}

export function getIssues(state) {
    return state.issues || {}
}

export function getUsers(state) {
    return state.users || {}
}

export function getUserData(state, user) {
    return getUsers(state)[user] || {}
}

export function getRepoByOwnerAndName(state, owner, name) {
    const repos = getRepos(state)
    const matching = Object.values(repos).filter(
        el => el.owner.toLowerCase() === owner.toLowerCase() &&
        el.name.toLowerCase() === name.toLowerCase()
    )
    return matching.length ? matching[0] : {}
}

export function getIssuesForRepoByOwnerAndName(state, owner, name) {
    const issuesById = getIssues(state)
    const repo = getRepoByOwnerAndName(state, owner, name)
    const issues = repo.issues || []
    return issues.map(el => issuesById[el])
}

export function getReposByOwner(state, owner) {
    const repos = getRepos(state)
    const matching = Object.values(repos).filter(el => el.owner.toLowerCase() === owner.toLowerCase())
    return matching
}

export function getIssueByNumberFromRepo(state, user, repo, number) {
    const issues = getIssuesForRepoByOwnerAndName(state, user, repo)
    const matching = issues.filter(el => el.number === number)
    return matching.length ? matching[0] : {}
}

export function getRecentCursorForRepository(state, user, repo) {
    const issues = getIssuesForRepoByOwnerAndName(state, user, repo)
    const lastCursor = issues.length ? issues[issues.length-1]._cursor : null
    return lastCursor
}