import ApolloClient from 'apollo-boost'

import { queryIssues, queryRepos } from './queries'
import { transformIssues, transformRepos } from './transforms'

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
        }
    }

    return api
}