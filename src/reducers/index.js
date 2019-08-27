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

export function getIssues(state) {
    const inputUser = getInputUser(state)
    const inputRepo = getInputRepo(state)
    return fromEntities.getIssuesForRepoByOwnerAndName(state.entities, inputUser, inputRepo)
}

export function getRepoHints(state) {
    const inputUser = getInputUser(state)
    return fromEntities.getReposByOwner(state.entities, inputUser)
}

export function getIssueByNumberFromRepo(state, user, repo, number) {
    return fromEntities.getIssueByNumberFromRepo(state.entities, user, repo, number)
}