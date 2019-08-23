import React from 'react'
import RepoHintsList from './RepoHintsList';

export default function RepoSearch({
    user, repo, repos,
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
            <form onSubmit={handleSumbit}>
                <input type="text" name="user" placeholder="Пользователь" value={user} onChange={handleUserChange}/>
                <input type="text" name="repository" placeholder="Репозиторий" value={repo} onChange={handleRepoChange}/>
                <input type="submit" value="Поиск"/>
            </form>
            <RepoHintsList repos={repos} onHintClicked={(repo) => onChangeRepo(repo)} />
        </>
    )
}

function makeChangeHandler(listener) {
    return (event) => {
        listener && listener(event.target.value)
    }
}
