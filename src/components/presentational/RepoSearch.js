import React from 'react'

const repoSearchFormStyle = {
    display: 'block',
    boxSizing: 'border-box',
    width: '100%',
    margin: 0,
    padding: 0
}

const repoSearchInputStyle = {
    display: 'block',
    boxSizing: 'border-box',
    width: '100%',
    border: '1px solid black',
    fontSize: 18,
    height: '1.5em',
    margin: 0,
    marginTop: '0.5em',
    marginBottom: '0.5em',
    padding: 0,
    paddingLeft: '0.25em'
}

const repoSearchSubmitStyle = {
    display: 'block',
    boxSizing: 'border-box',
    width: '100%',
    border: '1px solid black',
    background: 'lightgray',
    fontSize: 18,
    height: '2em'
}

export default function RepoSearch({
    user, repo,
    onChangeUser, onChangeRepo, onClickSearch
}) {
    const handleUserChange = makeChangeHandler(onChangeUser)
    const handleRepoChange = makeChangeHandler(onChangeRepo)
    const handleSumbit = (event) => {
        event.preventDefault()
        onClickSearch && onClickSearch()
    }

    return (
        <>
            <form style={repoSearchFormStyle} onSubmit={handleSumbit}>
                <input style={repoSearchInputStyle} type="text" name="user" placeholder="Пользователь" value={user} onChange={handleUserChange}/>
                <input style={repoSearchInputStyle} type="text" name="repository" placeholder="Репозиторий" value={repo} onChange={handleRepoChange}/>
                <input style={repoSearchSubmitStyle} type="submit" value="Поиск"/>
            </form>
        </>
    )
}

function makeChangeHandler(listener) {
    return (event) => {
        listener && listener(event.target.value)
    }
}
