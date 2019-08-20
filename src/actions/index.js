import {
    ACTION_INPUT_USER,
    ACTION_INPUT_REPO,
    ACTION_INPUT_SEARCH,
    ACTION_FETCH_ISSUES_OK
} from '../constants'

/**
 * flux standard action helper
 * for more info refer to: https://github.com/redux-utilities/flux-standard-action
 */
export default function action(type, payload, error, meta) {
    return {
        type,
        payload,
        error,
        meta
    }
}

export function actionInputUser(user) {
    return action(ACTION_INPUT_USER, user)
}

export function actionInputRepo(repo) {
    return action(ACTION_INPUT_REPO, repo)
}

export function actionInputSearch() {
    return action(ACTION_INPUT_SEARCH)
}

export function actionFetchIssuesOk(data) {
    return action(ACTION_FETCH_ISSUES_OK, data)
}