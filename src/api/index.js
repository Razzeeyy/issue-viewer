import ApolloClient from 'apollo-boost'
import gql from 'graphql-tag'

export default function configureApi() {
    const client = new ApolloClient({
        uri: 'https://api.github.com/graphql',
        headers: {
            Authorization: "bearer 1cbb3b1063f670289747dbc8784d8b9beedfbac6"
        }
    })
    
    return {
        requestIssues(user, repo) {
            const query = gql`
                query RepoIssues($user: String!, $repo: String!) {
                    repository(owner: $user, name: $repo) {
                        issues(last: 5) {
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
            return client.query({
                query,
                variables: {
                    user,
                    repo
                }
            })
        }
    }
}