import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { withRouter } from 'react-router-dom'

import RepoSearch from '../presentational/RepoSearch'
import LoadingIndicator from '../presentational/LoadingIndicator'
import RepoHintsList from '../presentational/RepoHintsList'
import Notice from '../presentational/Notice'
import { getInputUser, getInputRepo, getRepoHints, getIsLoadingRepos, getIsEverLoadedRepos } from '../../reducers'
import { actionInputUser, actionInputRepo } from '../../actions'

function RepoSearchContainer({ history }) {
    const user = useSelector(getInputUser)
    const repo = useSelector(getInputRepo)
    const repos = useSelector((state) => getRepoHints(state, true))
    const dispatch = useDispatch()
    const handleChangeUser = (user) => dispatch(actionInputUser(user))
    const handleChangeRepo = (repo) => dispatch(actionInputRepo(repo))
    const handleClickSearch = () => {
        if (user && repo) {
            history.push(`/${user}/${repo}`)
        }
    }
    const handleClickRepoHint = (repo) => {
        handleChangeRepo(repo)
        if (user && repo) {
            history.push(`/${user}/${repo}`)
        }
    }
    const isLoadingRepos = useSelector(state => getIsLoadingRepos(state, user))
    const isEverLoadedRepos = useSelector(state => getIsEverLoadedRepos(state, user))

    const displayNotice = isEverLoadedRepos && !repos.length && !isLoadingRepos

    return (
        <>
            <LoadingIndicator isLoading={isLoadingRepos} />
            <RepoSearch
                user={user}
                repo={repo}
                repos={repos}
                onChangeUser={handleChangeUser}
                onChangeRepo={handleChangeRepo}
                onClickSearch={handleClickSearch}
            />
            { displayNotice && <Notice text="No repos for this user" /> }
            <RepoHintsList repos={repos} onHintClicked={handleClickRepoHint} />
        </>
    )
}

export default withRouter(RepoSearchContainer)