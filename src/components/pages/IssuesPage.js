import React from 'react'
import BackLink from '../presentational/BackLink'
import './Page.css'

import IssuesListContainer from '../containers/IssuesListContainer'
import ErrorMessageContainer from '../containers/ErrorMessageContainer'

export default function IssuesPage(props) {
    return (
        <div className="page-container">
            <ErrorMessageContainer />
            <BackLink to="/" text="Go back"/>
            <IssuesListContainer />
        </div>
    )
}