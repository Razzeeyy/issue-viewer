import { combineReducers } from 'redux'
import input, * as fromInput from './input'
import entities from './entities'

export default combineReducers({
    input,
    entities
})

export function getInputUser(state) {
    return fromInput.getInputUser(state.input)
}

export function getInputRepo(state) {
    return fromInput.getInputRepo(state.input)
}

export function getIssues(state) {
    //TODO: FIXME: This needs some seriours rewrite
    const noIssues = []
    const inputUser = getInputUser(state)
    const inputRepo = getInputRepo(state)
    if(!inputUser || !inputRepo) {
        return noIssues
    }
    const repos = state.entities.repos
    const issues = state.entities.issues
    if(!repos || !issues) {
        return noIssues
    }
    const matchingRepos = Object.values(repos).filter(el => el.owner === inputUser && el.name === inputRepo)
    if(matchingRepos.length !== 1) {
        return noIssues
    }
    const repo = matchingRepos[0]
    return repo.issues ? repo.issues.map(el => issues[el]) : noIssues
}