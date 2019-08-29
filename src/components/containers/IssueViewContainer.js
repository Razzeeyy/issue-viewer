import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { withRouter } from 'react-router-dom'

import IssueView from '../presentational/IssueView'
import { getIssueByNumberFromRepo } from '../../reducers'
import { actionRequestIssue } from '../../actions';

function IssueViewContainer({ match, history }) {
    const user = match.params.user
    const repo = match.params.repo
    const number = parseInt(match.params.number)

    const dispatch = useDispatch()
    useEffect(
        () => {
            dispatch(actionRequestIssue(user, repo, number))
        },
        [dispatch, user, repo, number]
    )
    
    const issue = useSelector(state => getIssueByNumberFromRepo(state, user, repo, number))

    return (
        <IssueView
            issue={issue}
        />
    )
}

export default withRouter(IssueViewContainer)