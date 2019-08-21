export default function entitiesReducer(state={}, {payload, error}) {
    if(!error && payload && payload.entities) {
        const entities = payload.entities
        for(let entity of Object.keys(entities)) {
            state[entity] = {
                ...state[entity],
                ...entities[entity]
            }
        }
    }
    return state
}