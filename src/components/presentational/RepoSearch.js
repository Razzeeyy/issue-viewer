import React from 'react'

export default function RepoSearch({ user, repo, onChangeUser, onChangeRepo, onClickSearch }) {
    const handleUserChange = makeChangeHandler(onChangeUser)
    const handleRepoChange = makeChangeHandler(onChangeRepo)
    const handleSumbit = (event) => {
        event.preventDefault()
        onClickSearch && onClickSearch()
    }

    return (
        <form onSubmit={handleSumbit}>
            <input type="text" name="user" placeholder="Пользователь" value={user} onChange={handleUserChange}/>
            <input type="text" name="repository" placeholder="Репозиторий" value={repo} onChange={handleRepoChange}/>
            <input type="submit" value="Поиск"/>
        </form>
    )
}

function makeChangeHandler(listener) {
    return (event) => {
        listener && listener(event.target.value)
    }
}
