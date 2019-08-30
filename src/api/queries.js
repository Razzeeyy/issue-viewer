import gql from 'graphql-tag'

export const queryIssues = gql`
    query Issues($user: String!, $repo: String!, $cursor: String) {
        repository(owner: $user, name: $repo) {
            id
            name
            owner {
                login
            }
            issues(first: 100, after: $cursor, states: [OPEN], orderBy: { field: UPDATED_AT, direction: DESC }) {
                edges {
                    cursor
                    node {
                        id
                        number
                        title
                        body
                        updatedAt
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
                        owner {
                            login
                        }
                    }
                }
            }
        }
    }
`

export const queryIssue = gql`
    query Issue($user: String!, $repo: String!, $number: Int!) {
        repository(owner: $user, name: $repo) {
            id
            name
            owner {
                login
            }
            issue(number: $number) {
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
`