import React from 'react'
import Markdown from 'react-markdown'
import './IssueView.css'

export default function IssueView({ issue }) {
    return (
        <div className="issue-view">
            <h1 className="issue-view__title">
                {issue.title || 'Untitled'}
            </h1>
            <div className="issue-view__author">
                <img src={issue.author.avatarUrl} alt="" width={64} height={64}/>
                <a href={issue.author.url} target="_blank" rel="noopener noreferrer">
                    {issue.author.login || 'Unknown author'}
                </a>
            </div>
            <div className="issue-view__body">
                <Markdown source={issue.body || 'No body'} />
            </div>
        </div>
    )
}
