import React from 'react'
import './ErrorMessage.css'

export default function ErrorMessage({ text }) {
    return (
        <div className="error-message">
            <span className="error-message__text">{text}</span>
        </div>
    )
}