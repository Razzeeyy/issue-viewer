import React from 'react'

import Issue from './Issue'

export default class IssuesList extends React.PureComponent {
    render() {
        const {
            issues
        } = this.props

        return (
            <ul>
                {
                    issues.map(issue => <Issue key={issue.id} title={issue.title}/>)
                }
            </ul>
        )
    }
}