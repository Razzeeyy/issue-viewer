import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './Page.css'

import { getInputUser, getInputRepo } from '../../reducers'
import IssueViewContainer from '../containers/IssueViewContainer'

export default function DetailsPage(props) {
    const user = useSelector(getInputUser)
    const repo = useSelector(getInputRepo)

    return (
        <div className="page-container">
            <Link to={`/${user}/${repo}`}>Go back</Link>
            <IssueViewContainer />
        </div>
    )
}