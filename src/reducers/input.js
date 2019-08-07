import {
    ACTION_INPUT_USER,
    ACTION_INPUT_REPO
} from '../constants'


const defaultState = {
    user: '',
    repo: ''
}


export default function inputReducer(state=defaultState, action) {
    switch(action.type) {
        case ACTION_INPUT_USER:
            return {
                ...state,
                user: action.payload
            }
        case ACTION_INPUT_REPO:
            return {
                ...state,
                repo: action.payload
            }
        default:
            return state
    }
}

export function getInputUser(state) {
    return state.user
}

export function getInputRepo(state) {
    return state.repo
}