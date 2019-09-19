import React from 'react'

export default function LoadingIndicator({
    isLoading
}) {
    return (
        <>
            {isLoading && <div>loading</div>}
        </>
    )
}