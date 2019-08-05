import ApolloClient from 'apollo-boost'

export default function configureApi() {
    const client = new ApolloClient({
        uri: 'https://api.github.com/graphql',
        headers: {
            Authorization: "bearer 1cbb3b1063f670289747dbc8784d8b9beedfbac6"
        }
    })
    
    return client
}