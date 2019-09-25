import React from 'react'
import './Page.css'

export default function ErrorPage(props) {
    const { message } = props;

    //TODO link back to main page
    return (
        <div className="page-container">
            {message || 'Something went wrong.'}
        </div>
    )
}