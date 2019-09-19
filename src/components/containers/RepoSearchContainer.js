import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { withRouter } from 'react-router-dom'

import RepoSearch from '../presentational/RepoSearch'
import LoadingIndicator from '../presentational/LoadingIndicator'
import RepoHintsList from '../presentational/RepoHintsList'
import { getInputUser, getInputRepo, getRepoHints, getIsLoadingRepos } from '../../reducers'
import { actionInputUser, actionInputRepo } from '../../actions'

function RepoSearchContainer({ history }) {
    const user = useSelector(getInputUser)
    const repo = useSelector(getInputRepo)
    const repos = useSelector(getRepoHints)
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

    return (
        <>
            <RepoSearch
                user={user}
                repo={repo}
                repos={repos}
                onChangeUser={handleChangeUser}
                onChangeRepo={handleChangeRepo}
                onClickSearch={handleClickSearch}
            />
            <LoadingIndicator isLoading={isLoadingRepos} />
            <RepoHintsList repos={repos} onHintClicked={handleClickRepoHint} />
        </>
    )
}

export default withRouter(RepoSearchContainer)