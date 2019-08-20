import ApolloClient from 'apollo-boost'
import gql from 'graphql-tag'

import { issues } from './transforms'

export default function configureApi() {
    const client = new ApolloClient({
        uri: 'https://api.github.com/graphql',
        headers: {
            Authorization: "bearer 1cbb3b1063f670289747dbc8784d8b9beedfbac6"
        }
    })

    async function request(query, transform) {
        const response = await client.query(query)
        if(!transform)
            return response
        return transform(response)
    }
    
    return {
        async requestIssues(user, repo) {
            const query = gql`
                query RepoIssues($user: String!, $repo: String!) {
                    repository(owner: $user, name: $repo) {
                        issues(last: 100) {
                            edges {
                                node {
                                    id
                                    number
                                    title
                                }
                            }
                        }
                    }
                }
            `

            return request({
                query,
                variables: {
                    user,
                    repo
                }
            }, issues)
        }
    }
}