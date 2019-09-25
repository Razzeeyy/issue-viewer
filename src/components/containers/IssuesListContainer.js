import React, { useEffect, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { withRouter } from 'react-router-dom'

import IssuesList from '../presentational/IssuesList'
import LoadingIndicator from '../presentational/LoadingIndicator'
import { getIssuesForRepoByOwnerAndName, getRecentCursorForRepository, getIsLoadingIssues } from '../../reducers'
import { actionRequestIssues, actionInputUser, actionInputRepo } from '../../actions';

function IssuesListContainer({ match, history }) {
    const user = match.params.user
    const repo = match.params.repo
    const issues = useSelector(state => getIssuesForRepoByOwnerAndName(state, user, repo))
    const lastCursor = useSelector(state => getRecentCursorForRepository(state, user, repo))

    const dispatch = useDispatch()
    useEffect(
        () => {
            dispatch(actionInputUser(user))
            dispatch(actionInputRepo(repo))
            dispatch(actionRequestIssues(user, repo))
        },
        [dispatch, user, repo]
    )

    const handleScrolledToEnd = useCallback(
        () => dispatch(actionRequestIssues(user, repo, lastCursor)),
        [dispatch, user, repo, lastCursor]
    )

    const isLoadingIssues = useSelector(state => getIsLoadingIssues(state, user, repo))

    //TODO: properly display when there is no issues
    return (
        <>
            <LoadingIndicator isLoading={isLoadingIssues} />
            <IssuesList
                issues={issues || []}
                onIssueClick={(issue_number) => history.push(`/${user}/${repo}/${issue_number}`)}
                onEndReached={handleScrolledToEnd}
                endOffset={25}
            />
        </>
    )
}

export default withRouter(IssuesListContainer)