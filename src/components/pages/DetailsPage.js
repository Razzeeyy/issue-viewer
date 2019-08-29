import React from 'react'
import { Link } from 'react-router-dom'

import IssueViewContainer from '../containers/IssueViewContainer'

export default function DetailsPage(props) {
    return (
        <div>
            <Link to="/">Back to main</Link>
            <IssueViewContainer />
        </div>
    )
}