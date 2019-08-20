import React from 'react'

import RepoSearchContainer from '../containers/RepoSearchContainer'
import IssuesListContainer from '../containers/IssuesListContainer'
import Pagination from '../presentational/Pagination'

export default function MainPage(props) {
    return (
        <div>
            <RepoSearchContainer />
            <IssuesListContainer />
            {
                //<Pagination totalPages={5} selectedPage={2} onClickPage={(page) => console.log(page)}/>
            }
        </div>
    )
}