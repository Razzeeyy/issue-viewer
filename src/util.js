export function arrayToObject(arr, key='id') {
    const obj = arr.reduce((acc, el) => {
        acc[el[key]] = el
        return acc
    }, {})
    return obj
}
