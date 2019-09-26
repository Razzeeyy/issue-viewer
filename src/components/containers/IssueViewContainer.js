import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { withRouter } from 'react-router-dom'

import IssueView from '../presentational/IssueView'
import LoadingIndicator from '../presentational/LoadingIndicator'
import Notice from '../presentational/Notice'
import { getIssueByNumberFromRepo, getIsLoadingIssue, getIsEverLoadedIssue } from '../../reducers'
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
    const isEverLoadedIssue = useSelector(state => getIsEverLoadedIssue(state, user, repo, number))

    const isIssueEmpty = !Object.keys(issue).length
    
    const displayNotice = isEverLoadedIssue && isIssueEmpty  && !isLoadingIssue

    return (
        <>
            <LoadingIndicator isLoading={isLoadingIssue} />
            { displayNotice && <Notice text="No issue" /> }
            { !isIssueEmpty && <IssueView issue={issue} /> }
        </>
    )
}

export default withRouter(IssueViewContainer)