import React from 'react'

export default function IssueView({ issue }) {
    return (
        <div>
            {issue.title || 'Untitled'}
            <br/>
            {issue.body || 'No body'}
            <br/>
            {(issue.author && issue.author) || 'Unknown author'}
        </div>
    )
}
