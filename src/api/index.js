import ApolloClient from 'apollo-boost'

import { queryIssues, queryRepos, queryIssue } from './queries'
import { transformIssues, transformRepos, transformIssue } from './transforms'

export default function configureApi() {
    const client = new ApolloClient({
        uri: 'https://api.github.com/graphql',
        headers: {
            Authorization: 'bearer 1cbb3b1063f670289747dbc8784d8b9beedfbac6'
        }
    })
    
    const api = {
        async requestIssues(user, repo) {
            const repsonse = await client.query({
                query: queryIssues,
                variables: { user, repo }
            })
            return transformIssues(repsonse)
        },

        async requestRepos(user) {
            const response = await client.query({
                query: queryRepos,
                variables: { user }
            })
            return transformRepos(response)
        },

        async requestIssue(user, repo, number) {
            const response = await client.query({
                query: queryIssue,
                variables: { user, repo, number }
            })
            return transformIssue(response)
        },
    }

    return api
}