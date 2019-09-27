import {
    ACTION_PUSH_ERROR,
    ACTION_POP_ERROR
} from '../constants'

const defaultState = []

export default function errorsReducer(state=defaultState, action) {
    switch(action.type) {
        case ACTION_PUSH_ERROR:
            return [
                ...state,
                action.payload
            ]
        case ACTION_POP_ERROR:
            return state.length ? state.slice(1) : state
        default:
            return state
    }
}

export function getError(state) {
    return state.length ? state[0] : ''
}