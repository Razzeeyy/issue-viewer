import React from 'react'

import RepoSearch from '../presentational/RepoSearch'

export default function MainPage(props) {
    const log = console.log.bind(console)

    return (
        <div>
            <RepoSearch onChangeUser={log} onChangeRepo={log} onClickSearch={() => console.log("click")}/>
        </div>
    )
}