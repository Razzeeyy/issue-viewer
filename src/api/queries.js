import gql from 'graphql-tag'

export const queryIssues = gql`
    query Issues($user: String!, $repo: String!) {
        repository(owner: $user, name: $repo) {
            id
            name
            owner {
                login
            }
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
            login
            avatarUrl
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