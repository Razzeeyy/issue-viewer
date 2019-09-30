import React from 'react'

import ErrorPage from './pages/ErrorPage'

export default class ErrorBoundary extends React.Component {
    state = { error: null }

    componentDidCatch(error, info) {
        this.setState({ error })
        console.error(error, '\n', info.componentStack || info)
    }

    render() {
        const {
            error
        } = this.state

        if(error) {
            return <ErrorPage message={error.toString()}/>
        } else {
            return this.props.children
        }
    }
}