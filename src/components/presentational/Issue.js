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
            title
        } = this.props

        const {
            handleClick
        } = this

        return (
            <li onClick={handleClick}>
                {title}
            </li>
        )
    }
}