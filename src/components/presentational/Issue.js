import React from 'react'

export default class Issue extends React.PureComponent {
    handleClick = (event) => {
        const { onClick } = this.props

        if(onClick) {
            onClick()
        }
    }

    render() {
        const {
            issue
        } = this.props

        const {
            handleClick
        } = this

        return (
            <li onClick={handleClick}>
                {issue.title}
            </li>
        )
    }
}