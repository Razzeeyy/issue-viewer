import React from 'react'

const style = {
    display: "inline-block",
    marginRight: 10
}

export default function RepoHintsList({ repos, onHintClicked }) {
    return (
        <ul>
            {
                repos.map(repo => <li style={style} key={repo.id} onClick={() => onHintClicked(repo.name)}>{repo.name}</li>)
            }
        </ul>
    )
}
