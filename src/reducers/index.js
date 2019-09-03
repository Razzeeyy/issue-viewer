import { combineReducers } from 'redux'
import input, * as fromInput from './input'
import entities, * as fromEntities from './entities'

export default combineReducers({
    input,
    entities
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

export function getIssueByNumberFromRepo(state, user, repo, number) {
    return fromEntities.getIssueByNumberFromRepo(state.entities, user, repo, number)
}

export function getRecentCursorForRepository(state, user, repo) {
    return fromEntities.getRecentCursorForRepository(state.entities, user, repo)
}