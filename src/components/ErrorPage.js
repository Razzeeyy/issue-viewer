import React from 'react'

export default function ErrorPage(props) {
    const { message } = props;

    return (
        <div>
            {message || 'Something went wrong.'}
        </div>
    )
}