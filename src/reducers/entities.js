export default function entitiesReducer(state={}, {payload, error}) {
    //TODO: FIXME: This needs some seriours rewrite
    if(!error && payload && payload.entities) {
        const entities = payload.entities
        return Object.keys(entities).reduce((newState, entity) => {
            newState[entity] = {
                ...state[entity],
                ...entities[entity]
            }
            return newState
        }, {})
    }
    return state
}