import {
    ACTION_FETCH_ISSUES_OK
} from '../constants'
import { deduplicate } from '../util'

const defaultState = {
    byNumber: {},
    all: []
}

export default function inputReducer(state=defaultState, { type, payload }) {
    switch(type) {
        case ACTION_FETCH_ISSUES_OK:
            return {
                ...state,
                byNumber: {
                    ...state.byNumber,
                    ...payload.entities.issues
                },
                all: deduplicate([
                    ...state.all,
                    ...payload.result
                ])
            }
        default:
            return state
    }
}

export function getIssues(state) {
    return state.all.map(key => state.byNumber[key])
}