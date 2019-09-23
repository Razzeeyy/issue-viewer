import React from 'react'
import './RepoHintsList.css'

export default function RepoHintsList({ repos, onHintClicked }) {
    return (
        <ul className="repo-hints-list">
            {
                repos.map(repo => (
                    <li className="repo-hints-list__item" key={repo.id} onClick={() => onHintClicked(repo.name)}>
                        {repo.name}
                    </li>
                ))
            }
        </ul>
    )
}
