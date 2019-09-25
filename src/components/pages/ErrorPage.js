import React from 'react'
import './Page.css'

export default function ErrorPage(props) {
    const { message } = props;

    return (
        <div className="page-container">
            <a href="/">Back to Main</a>
            <br/>
            {message || 'Something went wrong.'}
        </div>
    )
}