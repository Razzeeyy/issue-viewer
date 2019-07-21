/**
 * flux standard action helper
 * for more info refer to: https://github.com/redux-utilities/flux-standard-action
 */

export default function action(type, payload, error, meta) {
    return {
        type,
        payload,
        error,
        meta
    }
}