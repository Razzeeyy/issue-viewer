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

const handleActions = [
    ACTION_FETCH_ISSUES,
    ACTION_FETCH_ISSUES_OK,
    ACTION_FETCH_ISSUES_FAIL,

    ACTION_FETCH_REPOS,
    ACTION_FETCH_REPOS_OK,
    ACTION_FETCH_REPOS_FAIL,

    ACTION_FETCH_ISSUE,
    ACTION_FETCH_ISSUE_OK,
    ACTION_FETCH_ISSUE_FAIL
]

const  defaultState = {}

export default function loadingReducer(state=defaultState, action) {
    if(!handleActions.includes(action.type)) {
        return state
    }

    const { user, repo, number } = action.meta
    const userState = state[user] || { loadingRepos: 0, repos: {} }
    const repoState = userState.repos[repo] || { loadingIssues: 0, issues: {} }
    const issueState = repoState.issues[number] || { loading: 0 }

    switch(action.type) {
        case ACTION_FETCH_REPOS:
            return {
                ...state,
                [user]: {
                    ...userState,
                    loadingRepos: userState.loadingRepos + 1
                }
            }
        case ACTION_FETCH_REPOS_OK:
        case ACTION_FETCH_REPOS_FAIL:
            return {
                ...state,
                [user]: {
                    ...userState,
                    loadingRepos: userState.loadingRepos - 1
                }
            }

        case ACTION_FETCH_ISSUES:
            return {
                ...state,
                [user]: {
                    ...userState,
                    repos: {
                        ...userState.repos,
                        [repo]: {
                            ...repoState,
                            loadingIssues: repoState.loadingIssues + 1
                        }
                    }
                }
            }
        case ACTION_FETCH_ISSUES_OK:    
        case ACTION_FETCH_ISSUES_FAIL:
            return {
                ...state,
                [user]: {
                    ...userState,
                    repos: {
                        ...userState.repos,
                        [repo]: {
                            ...repoState,
                            loadingIssues: repoState.loadingIssues - 1
                        }
                    }
                }
            }
        

        case ACTION_FETCH_ISSUE:
            return {
                ...state,
                [user]: {
                    ...userState,
                    repos: {
                        ...userState.repos,
                        [repo]: {
                            ...repoState,
                            issues: {
                                ...repoState.issues,
                                [number]: {
                                    ...issueState,
                                    loading: issueState.loading + 1
                                }
                            }
                        }
                    }
                }
            }
        case ACTION_FETCH_ISSUE_OK:
        case ACTION_FETCH_ISSUE_FAIL:
            return {
                ...state,
                [user]: {
                    ...userState,
                    repos: {
                        ...userState.repos,
                        [repo]: {
                            ...repoState,
                            issues: {
                                ...repoState.issues,
                                [number]: {
                                    ...issueState,
                                    loading: issueState.loading - 1
                                }
                            }
                        }
                    }
                }
            }

        default:
            return state
    }
}

export function getIsLoadingRepos(state, user) {
    const userState = state[user]
    return userState ? userState.loadingRepos !== 0 : false
}

export function getIsLoadingIssues(state, user, repo) {
    const userState = state[user]
    if (!userState) {
        return false
    }
    const repoState = state[user].repos[repo]
    return repoState ? repoState.loadingIssues !== 0 : false
}

export function getIsLoadingIssue(state, user, repo, issue) {
    const userState = state[user]
    if (!userState) {
        return false
    }
    const repoState = state[user].repos[repo]
    if (!repoState) {
        return false
    }
    const issueState = repoState.issues[issue]
    return issueState ? issueState.loading !== 0 : false
}