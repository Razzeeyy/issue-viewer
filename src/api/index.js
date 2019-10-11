import ApolloClient from 'apollo-boost'

import { queryIssues, queryRepos, queryIssue } from './queries'
import { transformIssues, transformRepos, transformIssue } from './transforms'

const token = process.env.REACT_APP_GITHUB_API_TOKEN

export default function configureApi() {
    const client = new ApolloClient({
        uri: 'https://api.github.com/graphql',
        headers: {
            Authorization: `bearer ${token}`
        }
    })

    const api = {
        async requestIssues(user, repo, cursor) {
            const repsonse = await client.query({
                fetchPolicy: 'no-cache',
                query: queryIssues,
                variables: { user, repo, cursor }
            })
            return transformIssues(repsonse)
        },

        async requestRepos(user) {
            const response = await client.query({
                fetchPolicy: 'no-cache',
                query: queryRepos,
                variables: { user }
            })
            return transformRepos(response)
        },

        async requestIssue(user, repo, number) {
            const response = await client.query({
                fetchPolicy: 'no-cache',
                query: queryIssue,
                variables: { user, repo, number }
            })
            return transformIssue(response)
        },
    }

    return api
}