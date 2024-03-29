import React from 'react'
import Markdown from 'react-markdown'
import moment from 'moment'
import './IssueView.css'

export default function IssueView({ issue }) {

    const updateDate = moment(issue.updatedAt).calendar(null, {
        sameElse: 'DD.MM.YYYY [at] h:m A'
    })

    return (
        <div className="issue-view">
            <h1 className="issue-view__title">
                {issue.title || 'Untitled'}
            </h1>
            <div className="issue-view__author">
                <img src={issue.author.avatarUrl} alt=""/>
                <a href={issue.author.url} target="_blank" rel="noopener noreferrer">
                    {issue.author.login || 'Unknown author'}
                </a>
                <span>Updated: {updateDate}</span>
            </div>
            <div className="issue-view__body">
                <Markdown source={issue.body || 'No body'} />
            </div>
        </div>
    )
}
