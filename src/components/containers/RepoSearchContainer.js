import React, { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import RepoSearch from '../presentational/RepoSearch'
import { getInputUser, getInputRepo } from '../../reducers'
import { actionInputUser, actionInputRepo } from '../../actions'

export default function RepoSearchContainer(props) {
    const user = useSelector(getInputUser)
    const repo = useSelector(getInputRepo)
    const dispatch = useDispatch()
    const handleChangeUser = useCallback(
        (user) => dispatch(actionInputUser(user)),
        [dispatch]
    )
    const handleChangeRepo = useCallback(
        (repo) => dispatch(actionInputRepo(repo)),
        [dispatch]
    )

    return (
        <RepoSearch user={user} repo={repo} onChangeUser={handleChangeUser} onChangeRepo={handleChangeRepo}/>
    )
}