export function deduplicate(arr) {
    const deduplicated = arr.reduce((acc, x) => {
        if (!acc.includes(x)) {
            acc.push(x)
        }
        return acc
    }, [])
    return deduplicated
}