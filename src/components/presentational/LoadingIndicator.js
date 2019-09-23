import React from 'react'
import './LoadingIndicator.css'

export default function LoadingIndicator({ isLoading }) {
    const indicatorClassNames = [
        'loading-indicator',
        !isLoading && 'loading-indicator--hidden',
    ].filter(x => !!x).join(' ')
    const sliderClassNames = [
        'loading-indicator__slider',
        isLoading && 'loading-indicator__slider--animate'
    ].filter(x => !!x).join(' ')
    return (
        <div className={indicatorClassNames}>
            <div className={sliderClassNames} />
        </div>
    )
}