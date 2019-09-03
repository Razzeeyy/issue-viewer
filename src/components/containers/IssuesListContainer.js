import React, { useEffect, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { withRouter } from 'react-router-dom'

import IssuesList from '../presentational/IssuesList'
import { getIssuesForRepoByOwnerAndName, getRecentCursorForRepository } from '../../reducers'
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

    return (
        <>
            <IssuesList
                issues={issues.length ? issues : [{ id: 0, title: 'No issues'}]}
                onIssueClick={(issue_number) => history.push(`/${user}/${repo}/${issue_number}`)}
                onEndReached={handleScrolledToEnd}
                endOffset={25}
            />
        </>
    )
}

export default withRouter(IssuesListContainer)