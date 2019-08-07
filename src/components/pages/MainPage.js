import React from 'react'

import RepoSearchContainer from '../containers/RepoSearchContainer'
import IssuesList from '../presentational/IssuesList'
import Pagination from '../presentational/Pagination'

export default function MainPage(props) {
    return (
        <div>
            <RepoSearchContainer />
            <IssuesList issues={[
                {id: 0, title: "issue 1"},
                {id: 1, title: "issue 2"}
            ]}/>
            <Pagination totalPages={5} selectedPage={2} onClickPage={(page) => console.log(page)}/>
        </div>
    )
}