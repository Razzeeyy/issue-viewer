import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { withRouter } from 'react-router-dom'

import IssuesList from '../presentational/IssuesList'
import { getIssuesForRepoByOwnerAndName } from '../../reducers'
import { actionRequestIssues } from '../../actions';

function IssuesListContainer({ match, history }) {
    const user = match.params.user
    const repo = match.params.repo
    const issues = useSelector(state => getIssuesForRepoByOwnerAndName(state, user, repo))

    const dispatch = useDispatch()
    useEffect(
        () => {
            dispatch(actionRequestIssues(user, repo))
        },
        [dispatch, user, repo]
    )

    return (
        <IssuesList
            issues={issues.length ? issues : [{ id: 0, title: 'No issues'}]}
            onIssueClick={(issue_number) => history.push(`/${user}/${repo}/${issue_number}`)}
        />
    )
}

export default withRouter(IssuesListContainer)