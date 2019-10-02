import React from 'react'
import { useSelector } from 'react-redux'
import BackLink from '../presentational/BackLink'
import './Page.css'

import { getInputUser, getInputRepo } from '../../reducers'
import IssueViewContainer from '../containers/IssueViewContainer'
import ErrorMessageContainer from '../containers/ErrorMessageContainer'

export default function DetailsPage(props) {
    const user = useSelector(getInputUser)
    const repo = useSelector(getInputRepo)

    return (
        <div className="page-container">
            <ErrorMessageContainer />
            <BackLink to={`/${user}/${repo}`} text="Go back"/>
            <IssueViewContainer />
        </div>
    )
}