import React from 'react'

export default function Notice({ text, className }) {
    return <span className={className}>{text}</span>
}