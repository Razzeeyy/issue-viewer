import * as constants from '../constants'

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
    return action(constants.ACTION_INPUT_USER, user)
}

export function actionInputRepo(repo) {
    return action(constants.ACTION_INPUT_REPO, repo)
}

export function actionRequestIssues(user, repo, cursor) {
    return action(constants.ACTION_REQUEST_ISSUES, {
        user, repo, cursor
    })
}

export function actionFetchIssues(user, repo) {
    return action(constants.ACTION_FETCH_ISSUES, null, false, {
        user, repo
    })
}

export function actionFetchIssuesOk(data, user, repo) {
    return action(constants.ACTION_FETCH_ISSUES_OK, data, false, {
        user, repo
    })
}

export function actionFetchIssuesFail(error, user, repo) {
    return action(constants.ACTION_FETCH_ISSUES_FAIL, error, true, {
        user, repo
    })
}

export function actionFetchRepos(user) {
    return action(constants.ACTION_FETCH_REPOS, null, false, {
        user
    })
}

export function actionFetchReposOk(data, user) {
    return action(constants.ACTION_FETCH_REPOS_OK, data, false, {
        user
    })
}

export function actionFetchReposFail(error, user) {
    return action(constants.ACTION_FETCH_REPOS_FAIL, error, true, {
        user
    })
}

export function actionRequestIssue(user, repo, number) {
    return action(constants.ACTION_REQUEST_ISSUE, {
        user, repo, number
    })
}

export function actionFetchIssue(user, repo, number) {
    return action(constants.ACTION_FETCH_ISSUE, null, false, {
        user, repo, number
    })
}

export function actionFetchIssueOk(data, user, repo, number) {
    return action(constants.ACTION_FETCH_ISSUE_OK, data, false, {
        user, repo, number
    })
}

export function actionFetchIssueFail(error, user, repo, number) {
    return action(constants.ACTION_FETCH_ISSUE_FAIL, error, true, {
        user, repo, number
    })
}

export function actionPushError(error) {
    return action(constants.ACTION_PUSH_ERROR, error)
}

export function actionPopError() {
    return action(constants.ACTION_POP_ERROR)
}