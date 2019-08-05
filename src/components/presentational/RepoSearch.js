import React from 'react'

export default class RepoSearch extends React.PureComponent {
    handleUserChange = (event) => {
        const { onChangeUser } = this.props
        const value = event.target.value

        if(onChangeUser) {
            onChangeUser(value)
        }
    }

    handleRepoChange = (event) => {
        const { onChangeRepo } = this.props
        const value = event.target.value

        if(onChangeRepo) {
            onChangeRepo(value)
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
        
        const { onClickSearch } = this.props

        if(onClickSearch) {
            onClickSearch()
        }
    }

    render() {
        const {
            user,
            repo
        } = this.props

        const {
            handleUserChange,
            handleRepoChange,
            handleSubmit
        } = this
    
        return (
            <form onSubmit={handleSubmit}>
                <input type="text" name="user" placeholder="Пользователь" value={user} onChange={handleUserChange}/>
                {' '}
                <input type="text" name="repository" placeholder="Репозиторий" value={repo} onChange={handleRepoChange}/>
                {' '}
                <input type="submit" value="Поиск"/>
            </form>
        )
    }
}