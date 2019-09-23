import React from 'react'
import './RepoSearch.css'

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
            <form className="repo-search" onSubmit={handleSumbit}>
                <input className="repo-search__input" type="text" name="user" placeholder="Пользователь" value={user} onChange={handleUserChange}/>
                <input className="repo-search__input" type="text" name="repository" placeholder="Репозиторий" value={repo} onChange={handleRepoChange}/>
                <input className="repo-search__submit" type="submit" value="Поиск"/>
            </form>
        </>
    )
}

function makeChangeHandler(listener) {
    return (event) => {
        listener && listener(event.target.value)
    }
}
