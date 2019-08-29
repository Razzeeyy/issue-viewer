import React from 'react'
import { Link } from 'react-router-dom'

import IssuesListContainer from '../containers/IssuesListContainer'

export default function IssuesPage(props) {
    return (
        <div>
            <Link to="/">Back to main</Link>
            <IssuesListContainer />
        </div>
    )
}