import gql from 'graphql-tag'

export const queryIssues = gql`
    query Issues($user: String!, $repo: String!) {
        repository(owner: $user, name: $repo) {
            issues(last: 100) {
                edges {
                    node {
                        id
                        number
                        title
                        body
                        author {
                            login
                            avatarUrl
                        }
                    }
                }
            }
        }
    }
`

export const queryRepos = gql`
    query Repos($user: String!) {
        user(login: $user) {
            repositories(last: 100) {
                edges {
                    node {
                        id
                        name
                    }
                }
            }
        }
    }
`