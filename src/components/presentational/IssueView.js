import React from 'react'

export default function IssueView({ issue }) {
    return (
        <div>
            {issue.title}
            <br/>
            {issue.body}
            <br/>
            {issue.author.login}
        </div>
    )
}
