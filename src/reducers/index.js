import { combineReducers } from 'redux'
import input, * as fromInput from './input'
import issues, * as fromIssues from './issues'

export default combineReducers({
    input,
    issues
})

export function getInputUser(state) {
    return fromInput.getInputUser(state.input)
}

export function getInputRepo(state) {
    return fromInput.getInputRepo(state.input)
}

export function getIssues(state) {
    return fromIssues.getIssues(state.issues)
}