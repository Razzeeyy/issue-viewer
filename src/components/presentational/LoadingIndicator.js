import React from 'react'
import './LoadingIndicator.css'

export default function LoadingIndicator({ isLoading }) {
    return (
        <>
            {isLoading && <div className="loading-indicator"></div>}
        </>
    )
}