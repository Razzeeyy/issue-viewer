import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { withRouter } from 'react-router-dom'

import RepoSearch from '../presentational/RepoSearch'
import { getInputUser, getInputRepo, getRepoHints } from '../../reducers'
import { actionInputUser, actionInputRepo } from '../../actions'

function RepoSearchContainer({ history }) {
    const user = useSelector(getInputUser)
    const repo = useSelector(getInputRepo)
    const repos = useSelector(getRepoHints)
    const dispatch = useDispatch()
    const handleChangeUser = (user) => dispatch(actionInputUser(user))
    const handleChangeRepo = (repo) => dispatch(actionInputRepo(repo))
    const handleClickSearch = () => {
        history.push(`/${user}/${repo}`)
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