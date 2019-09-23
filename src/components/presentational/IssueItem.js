import React, { forwardRef } from 'react'
import './IssuesList.css'

function IssueItem({ issue, onClick }, ref) {
    return (
        <li className="issues-list__item" ref={ref} onClick={() => onClick(issue.number)}>
            {issue.title}
        </li>
    )
}

export default forwardRef(IssueItem)
