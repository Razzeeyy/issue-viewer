import React from 'react'

const loadingIndicatorStyle = {
    position: 'fixed',
    left: 0,
    top: 0,
    display: 'block',
    width: '100%',
    height: 2,
    background: 'black'
}

export default function LoadingIndicator({ isLoading }) {
    return (
        <>
            {isLoading && <div style={loadingIndicatorStyle}></div>}
        </>
    )
}