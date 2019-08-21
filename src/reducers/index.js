import { combineReducers } from 'redux'
import input, * as fromInput from './input'
import entities from './entities'

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
    const issues = state.entities.issues
    return issues ? Object.values(issues) : []
}