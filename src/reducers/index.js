import { combineReducers } from 'redux'
import moment from 'moment'
import input, * as fromInput from './input'
import entities, * as fromEntities from './entities'
import loading, * as fromLoading from './loading'

export default combineReducers({
    input,
    entities,
    loading
})

export function getInputUser(state) {
    return fromInput.getInputUser(state.input)
}

export function getInputRepo(state) {
    return fromInput.getInputRepo(state.input)
}

export function getRepoHints(state, sorted=false) {
    const inputUser = getInputUser(state)
    const repos = fromEntities.getReposByOwner(state.entities, inputUser)
    if (!sorted) {
        return repos
    }
    const sortedRepos = repos.slice().sort()
    return sortedRepos
}

export function getIssuesForRepoByOwnerAndName(state, user, name, sorted=false) {
    const issues = fromEntities.getIssuesForRepoByOwnerAndName(state.entities, user, name)
    if (!sorted) {
        return issues
    }
    const sortedIssues = issues.slice().sort((a, b) => moment(a.updatedAt).isAfter(b.updatedAt) ? -1 : 1)
    return sortedIssues;
}

export function getIssueByNumberFromRepo(state, user, repo, number, denormalizeAuthor=false) {
    const issue = fromEntities.getIssueByNumberFromRepo(state.entities, user, repo, number)
    if (!denormalizeAuthor) {
        return issue
    }
    return {
        ...issue,
        author: fromEntities.getUserData(state.entities, issue.author)
    }
}

export function getRecentCursorForRepository(state, user, repo) {
    return fromEntities.getRecentCursorForRepository(state.entities, user, repo)
}

export function getIsLoadingRepos(state, user) {
    return fromLoading.getIsLoadingRepos(state.loading, user)
}

export function getIsLoadingIssues(state, user, repo) {
    return fromLoading.getIsLoadingIssues(state.loading, user, repo)
}

export function getIsLoadingIssue(state, user, repo, number) {
    return fromLoading.getIsLoadingIssue(state.loading, user, repo, number)
}