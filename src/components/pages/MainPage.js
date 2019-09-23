import React from 'react'
import './Page.css'

import RepoSearchContainer from '../containers/RepoSearchContainer'

export default function MainPage(props) {
    return (
        <div className="page-container">
            <RepoSearchContainer />
        </div>
    )
}