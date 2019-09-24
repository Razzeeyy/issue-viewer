import { combineReducers } from 'redux'
import input, * as fromInput from './input'
import entities, * as fromEntities from './entities'
import loading, * as fromLoading from './loading'

export default combineReducers({
    input,
    entities,
    loading
})

export function getInputUser(state) {
    return fromInput.getInputUser(state.input)
}

export function getInputRepo(state) {
    return fromInput.getInputRepo(state.input)
}

export function getRepoHints(state) {
    const inputUser = getInputUser(state)
    return fromEntities.getReposByOwner(state.entities, inputUser)
}

export function getIssuesForRepoByOwnerAndName(state, user, name) {
    return fromEntities.getIssuesForRepoByOwnerAndName(state.entities, user, name)
}

export function getIssueByNumberFromRepo(state, user, repo, number, withUserData) {
    return fromEntities.getIssueByNumberFromRepo(state.entities, user, repo, number, withUserData)
}

export function getRecentCursorForRepository(state, user, repo) {
    return fromEntities.getRecentCursorForRepository(state.entities, user, repo)
}

export function getIsLoadingRepos(state, user) {
    return fromLoading.getIsLoadingRepos(state.loading, user)
}

export function getIsLoadingIssues(state, user, repo) {
    return fromLoading.getIsLoadingIssues(state.loading, user, repo)
}

export function getIsLoadingIssue(state, user, repo, number) {
    return fromLoading.getIsLoadingIssue(state.loading, user, repo, number)
}