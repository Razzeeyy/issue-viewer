import React from 'react'

import ErrorPage from './ErrorPage'

export default class ErrorBoundary extends React.Component {
    state = { error: null, info: null }

    componentDidCatch(error, info) {
        this.setState({error, info})
        console.log(error) //TODO: a better logging method
        console.log(info)
    }

    render() {
        const {
            error,
            //info
        } = this.state

        if(error) {
            return <ErrorPage message={error.toString()}/>
        } else {
            return this.props.children
        }
    }
}