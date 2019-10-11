import React from 'react'
import './Page.css'

export default function ErrorPage(props) {
    const { message } = props;
// TODO: style error page
    return (
        <div className="page-container">
            <div>
                Something went horribly wrong, but no worries!
            </div>
            <a href="/">Please click here to go back to safety</a>
            <div>If you're techy person here is this:</div>
            <div>{message || 'No error supplied or page not found.'}</div>
        </div>
    )
}