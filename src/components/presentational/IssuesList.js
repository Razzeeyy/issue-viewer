import React from 'react'

import Issue from './Issue'

export default function IssuesList({ issues }) {
    return (
        <ul>
            {
                issues.map(issue => <Issue key={issue.id} issue={issue}/>)
            }
        </ul>
    )
}
