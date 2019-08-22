import React, { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import RepoSearch from '../presentational/RepoSearch'
import { getInputUser, getInputRepo, getRepoHints } from '../../reducers'
import { actionInputUser, actionInputRepo, actionInputSearch } from '../../actions'

export default function RepoSearchContainer(props) {
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
    const handleClickSearch = useCallback(
        () => dispatch(actionInputSearch()),
        [dispatch]
    )

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