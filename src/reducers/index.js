import { combineReducers } from 'redux'
import input, * as fromInput from './input'

export default combineReducers({
    input
})

export function getInputUser(state) {
    return fromInput.getInputUser(state.input)
}

export function getInputRepo(state) {
    return fromInput.getInputRepo(state.input)
}