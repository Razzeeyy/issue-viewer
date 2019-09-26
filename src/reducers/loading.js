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

const  defaultState = {
    loadingRepos: {},
    loadingIssues: {},
    loadingIssue: {}
}

const hashUser = (user) => `${user}`
const hashUserRepo = (user, repo) => `${user}/${repo}`
const hashUserRepoIssue = (user, repo, issue) => `${user}/${repo}/${issue}`

export default function loadingReducer(state=defaultState, action) {
    if(!handleActions.includes(action.type)) {
        return state
    }

    const { user, repo, number } = action.meta

    switch(action.type) {
        case ACTION_FETCH_REPOS: {
            const hash = hashUser(user)
            state.loadingRepos = {
                ...state.loadingRepos,
                [hash]: true
            }
            return { ...state }
        }
        case ACTION_FETCH_REPOS_OK:
        case ACTION_FETCH_REPOS_FAIL: {
            const hash = hashUser(user)
            state.loadingRepos = {
                ...state.loadingRepos,
                [hash]: false
            }
            return { ...state }
        }

        case ACTION_FETCH_ISSUES: {
            const hash = hashUserRepo(user, repo)
            state.loadingIssues = {
                ...state.loadingIssues,
                [hash]: true
            }
            return { ...state }
        }
        case ACTION_FETCH_ISSUES_OK:    
        case ACTION_FETCH_ISSUES_FAIL: {
            const hash = hashUserRepo(user, repo)
            state.loadingIssues = {
                ...state.loadingIssues,
                [hash]: false
            }
            return { ...state }
        }
        

        case ACTION_FETCH_ISSUE: {
            const hash = hashUserRepoIssue(user, repo, number)
            state.loadingIssue = {
                ...state.loadingIssue,
                [hash]: true
            }
            return { ...state }
        }
        case ACTION_FETCH_ISSUE_OK:
        case ACTION_FETCH_ISSUE_FAIL:{
            const hash = hashUserRepoIssue(user, repo, number)
            state.loadingIssue = {
                ...state.loadingIssue,
                [hash]: false
            }
            return { ...state }
        }

        default:
            return state
    }
}

export function getIsLoadingRepos(state, user) {
    const hash = hashUser(user)
    return !!state.loadingRepos[hash]
}

export function getIsLoadingIssues(state, user, repo) {
    const hash = hashUserRepo(user, repo)
    return !!state.loadingIssues[hash]
}

export function getIsLoadingIssue(state, user, repo, issue) {
    const hash = hashUserRepoIssue(user, repo, issue)
    return !!state.loadingIssue[hash]
}

export function getIsEverLoadedRepos(state, user) {
    const hash = hashUser(user)
    return state.loadingRepos[hash] !== undefined
}

export function getIsEverLoadedIssues(state, user, repo) {
    const hash = hashUserRepo(user, repo)
    return state.loadingIssues[hash] !== undefined
}

export function getIsEverLoadedIssue(state, user, repo, issue) {
    const hash = hashUserRepoIssue(user, repo, issue)
    return state.loadingIssue[hash] !== undefined
}