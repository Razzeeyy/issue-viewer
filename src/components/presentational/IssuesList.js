import React from 'react'

import IssueItem from './IssueItem'

export default function IssuesList({ issues, onIssueClick }) {
    return (
        <ul>
            {
                issues.map(issue => <IssueItem
                    key={issue.id}
                    issue={issue}
                    onClick={onIssueClick}
                />)
            }
        </ul>
    )
}
