import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

import IssueItem from './IssueItem'

export default function IssuesList({ issues, onIssueClick, onEndReached, endOffset=0 }) {
    const [ref, inView] = useInView({
        threshold: 1
    })

    useEffect(
        () => {
            if(inView && onEndReached) {
                onEndReached()
            }
        },
        [inView, onEndReached]
    )

    return (
        <ul>
            {
                issues.map((issue, index) => (<IssueItem
                        key={issue.id}
                        issue={issue}
                        onClick={onIssueClick}
                        ref={index === issues.length - (1 + endOffset) ? ref : undefined}
                    />)
                )
            }
        </ul>
    )
}
