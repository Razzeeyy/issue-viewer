import React from 'react'
import './Page.css'

import RepoSearchContainer from '../containers/RepoSearchContainer'
import ErrorMessageContainer from '../containers/ErrorMessageContainer'

export default function MainPage(props) {
    return (
        <div className="page-container">
            <ErrorMessageContainer />
            <RepoSearchContainer />
        </div>
    )
}