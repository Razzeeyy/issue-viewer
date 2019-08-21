import React from 'react'

import RepoSearchContainer from '../containers/RepoSearchContainer'
import IssuesListContainer from '../containers/IssuesListContainer'

export default function MainPage(props) {
    return (
        <div>
            <RepoSearchContainer />
            <IssuesListContainer />
        </div>
    )
}