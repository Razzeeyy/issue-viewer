import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { withRouter } from 'react-router-dom'

import IssueView from '../presentational/IssueView'
import LoadingIndicator from '../presentational/LoadingIndicator'
import { getIssueByNumberFromRepo, getIsLoadingIssue } from '../../reducers'
import { actionRequestIssue, actionInputUser, actionInputRepo } from '../../actions';

function IssueViewContainer({ match, history }) {
    const user = match.params.user
    const repo = match.params.repo
    const number = parseInt(match.params.number)

    const dispatch = useDispatch()
    useEffect(
        () => {
            dispatch(actionInputUser(user))
            dispatch(actionInputRepo(repo))
            dispatch(actionRequestIssue(user, repo, number))
        },
        [dispatch, user, repo, number]
    )
    
    const issue = useSelector(state => getIssueByNumberFromRepo(state, user, repo, number, true))
    const isLoadingIssue = useSelector(state => getIsLoadingIssue(state, user, repo, number))

    return (
        <>
            <LoadingIndicator isLoading={isLoadingIssue} />
            <IssueView
                issue={issue}
            />
        </>
    )
}

export default withRouter(IssueViewContainer)