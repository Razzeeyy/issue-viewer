import React from 'react'
import { Link } from 'react-router-dom'
import './BackLink.css'

export default function BackLink({ to, text }) {
    return (
        <Link className="back-link" to={to}>{text}</Link>
    )
}