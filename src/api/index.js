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

    async function request(query, transform) {
        const response = await client.query(query)
        if(!transform)
            return response
        return transform(response)
    }
    
    const api = {
        async requestIssues(user, repo) {
            return request({
                query: queryIssues,
                variables: { user, repo }
            }, transformIssues)
        },

        async requestRepos(user) {
            return request({
                query: queryRepos,
                variables: { user }
            }, transformRepos)
        }
    }

    return api
}