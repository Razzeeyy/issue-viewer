import { schema } from 'normalizr'

export const repo = new schema.Entity('repos')

export const user = new schema.Entity('users', {
    repositories: [repo]
}, {
    idAttribute: 'login'
})

export const issue = new schema.Entity('issues', {
    author: user
})

repo.define({
    issues: [issue],
    issue,
    owner: user
})