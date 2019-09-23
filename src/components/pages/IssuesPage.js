import React from 'react'
import { Link } from 'react-router-dom'
import './Page.css'

import IssuesListContainer from '../containers/IssuesListContainer'

export default function IssuesPage(props) {
    return (
        <div className="page-container">
            <Link to="/">Go back</Link>
            <IssuesListContainer />
        </div>
    )
}