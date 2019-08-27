import React from 'react'
import { useSelector } from 'react-redux'
import { withRouter } from 'react-router-dom'

import IssuesList from '../presentational/IssuesList'
import { getIssues, getInputUser, getInputRepo } from '../../reducers'

function IssuesListContainer({ history }) {
    const issues = useSelector(getIssues)
    const user = useSelector(getInputUser)
    const repo = useSelector(getInputRepo)

    return (
        <IssuesList
            issues={issues.length ? issues : [{ id: 0, title: 'No issues'}]}
            onIssueClick={(issue_number) => history.push(`/${user}/${repo}/${issue_number}`)}
        />
    )
}

export default withRouter(IssuesListContainer)