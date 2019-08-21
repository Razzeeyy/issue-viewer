export function arrayToObject(arr, key='id') {
    const obj = arr.reduce((acc, el) => {
        acc[el[key]] = el
        return acc
    }, {})
    return obj
}

export function deduplicate(arr) {
    return Array.from(new Set(arr))
}