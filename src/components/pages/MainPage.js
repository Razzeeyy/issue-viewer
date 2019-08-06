import React from 'react'

import RepoSearch from '../presentational/RepoSearch'
import IssuesList from '../presentational/IssuesList';

export default function MainPage(props) {
    return (
        <div>
            <RepoSearch/>
            <IssuesList issues={[
                {id: 0, title: "issue 1"},
                {id: 1, title: "issue 2"}
            ]}/>
        </div>
    )
}