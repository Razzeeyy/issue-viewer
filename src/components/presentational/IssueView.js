import React from 'react'
import './IssueView.css'

export default function IssueView({ issue }) {
    return (
        <div className="issue-view">
            <h1 className="issue-view__title">
                {issue.title || 'Untitled'}
            </h1>
            <div className="issue-view__author">
                {issue.author ? issue.author : 'Unknown author'}
            </div>
            <div className="issue-view__body">
                {issue.body || 'No body'}
            </div>
        </div>
    )
}
