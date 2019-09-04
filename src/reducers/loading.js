import {
    ACTION_FETCH_ISSUES,
    ACTION_FETCH_ISSUES_OK,
    ACTION_FETCH_ISSUES_FAIL,

    ACTION_FETCH_REPOS,
    ACTION_FETCH_REPOS_OK,
    ACTION_FETCH_REPOS_FAIL,

    ACTION_FETCH_ISSUE,
    ACTION_FETCH_ISSUE_OK,
    ACTION_FETCH_ISSUE_FAIL
} from '../constants'
import { stat } from 'fs';

const  defaultState = {}

export default function loadingReducer(state=defaultState, action) {
    switch(action.type) {
        case ACTION_FETCH_REPOS:
        {
            const { user } = action.meta
            const defaultUserState = { loading_repos: 0, repos: {} }
            const userState = state[user] ? { ...state[user] } : defaultUserState
            userState.loading_repos += 1
            return {
                ...state,
                [user]: userState
            }
        }
        case ACTION_FETCH_REPOS_OK:
        case ACTION_FETCH_REPOS_FAIL:
        {
            const { user } = action.meta
            const defaultUserState = { loading_repos: 0, repos: {} }
            const userState = state[user] ? { ...state[user] } : defaultUserState
            userState.loading_repos -= 1
            return {
                ...state,
                [user]: userState
            }
        }
    }
    return state
}

export function getIsLoadingRepos(state, user) {
    return state[user] ? state[user].loading_repos != 0 : false
}