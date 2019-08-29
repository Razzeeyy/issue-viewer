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

export function actionRequestIssues(user, repo) {
    return action(constants.ACTION_REQUEST_ISSUES, {
        user, repo
    })
}

export function actionFetchIssues() {
    return action(constants.ACTION_FETCH_ISSUES)
}

export function actionFetchIssuesOk(data) {
    return action(constants.ACTION_FETCH_ISSUES_OK, data)
}

export function actionFetchIssuesFail(error) {
    return action(constants.ACTION_FETCH_ISSUES_FAIL, error, true)
}

export function actionFetchRepos() {
    return action(constants.ACTION_FETCH_REPOS)
}

export function actionFetchReposOk(data) {
    return action(constants.ACTION_FETCH_REPOS_OK, data)
}

export function actionFetchReposFail(error) {
    return action(constants.ACTION_FETCH_REPOS_FAIL, error, true)
}

export function actionRequestIssue(user, repo, number) {
    return action(constants.ACTION_REQUEST_ISSUE, {
        user, repo, number
    })
}

export function actionFetchIssue() {
    return action(constants.ACTION_FETCH_ISSUE)
}

export function actionFetchIssueOk(data) {
    return action(constants.ACTION_FETCH_ISSUE_OK, data)
}

export function actionFetchIssueFail(error) {
    return action(constants.ACTION_FETCH_ISSUE_FAIL, error, true)
}