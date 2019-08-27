import React from 'react'

export default function IssueItem({ issue, onClick }) {
    return (
        <li onClick={() => onClick(issue.number)}>
            {issue.title}
        </li>
    )
}
