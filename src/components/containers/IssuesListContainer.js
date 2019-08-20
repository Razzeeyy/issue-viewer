import React from 'react'
import { useSelector } from 'react-redux'

import IssuesList from '../presentational/IssuesList'
import { getIssues } from '../../reducers'

export default function IssuesListContainer(props) {
    const issues = useSelector(getIssues)

    return (
        <IssuesList issues={issues.length ? issues : [{ id: 0, title: 'No issues'}]}/>
    )
}