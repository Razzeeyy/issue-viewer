import React from 'react'

export default function Issue({ issue, onClick }) {
    return (
        <li onClick={onClick}>
            {issue.title}
        </li>
    )
}
