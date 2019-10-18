import React from 'react'
import './Page.css'
import './ErrorPage.css'

export default function ErrorPage(props) {
    const { message } = props;
    return (
        <div className="page-container">
            <div className="error-page__explanation">
                Something went wrong, but no worries!
            </div>
            <a className="error-page__backlink" href="/">This is link to (probable) safety.</a>
            <div className="error-page__tech">
                <span>If you're techy person here is this:</span>
                <pre className="error-page__error">{message || 'No error supplied or page not found.'}</pre>
            </div>
        </div>
    )
}