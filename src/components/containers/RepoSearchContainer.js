import React, { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { withRouter } from 'react-router-dom'

import RepoSearch from '../presentational/RepoSearch'
import { getInputUser, getInputRepo, getRepoHints } from '../../reducers'
import { actionInputUser, actionInputRepo, actionInputSearch } from '../../actions'

function RepoSearchContainer({ history }) {
    const user = useSelector(getInputUser)
    const repo = useSelector(getInputRepo)
    const repos = useSelector(getRepoHints)
    const dispatch = useDispatch()
    const handleChangeUser = useCallback(
        (user) => dispatch(actionInputUser(user)),
        [dispatch]
    )
    const handleChangeRepo = useCallback(
        (repo) => dispatch(actionInputRepo(repo)),
        [dispatch]
    )
    const handleClickSearch = () => {
        history.push(`/${user}/${repo}`)
        return dispatch(actionInputSearch())
    }

    return (
        <RepoSearch
            user={user}
            repo={repo}
            repos={repos}
            onChangeUser={handleChangeUser}
            onChangeRepo={handleChangeRepo}
            onClickSearch={handleClickSearch}
        />
    )
}

export default withRouter(RepoSearchContainer)