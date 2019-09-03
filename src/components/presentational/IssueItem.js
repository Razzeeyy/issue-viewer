import React, { forwardRef } from 'react'

function IssueItem({ issue, onClick }, ref) {
    return (
        <li ref={ref} onClick={() => onClick(issue.number)}>
            {issue.title}
        </li>
    )
}

export default forwardRef(IssueItem)
