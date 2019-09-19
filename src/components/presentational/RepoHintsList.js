import React from 'react'

const repoHintsListStyle = {
    display: 'block',
    width: '100%',
    fontSize: 20,
    margin: 0,
    marginTop: '0.75em',
    padding: 0
}

const repoHintsListItemStyle = {
    display: 'inline-block',
    backgroundColor: 'cornflowerblue',
    border: '1px solid black',
    borderRadius: '0.25em',
    marginRight: '0.5em',
    marginBottom: '0.75em',
    padding: '0.5em',
    paddingTop: '0.25em',
    paddingBottom: '0.25em'
}

export default function RepoHintsList({ repos, onHintClicked }) {
    return (
        <ul style={repoHintsListStyle}>
            {
                repos.map(repo => <li style={repoHintsListItemStyle} key={repo.id} onClick={() => onHintClicked(repo.name)}>{repo.name}</li>)
            }
        </ul>
    )
}
