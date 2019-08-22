import React from 'react'

export default function RepoHintsList({ repos }) {
    return (
        <ul>
            {
                repos.map(repo => <li key={repo.id}>{repo.name}</li>)
            }
        </ul>
    )
}
