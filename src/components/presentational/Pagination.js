import React from 'react'


export default function Pagination({ totalPages, selectedPage, onClickPage }) {
    const handleClickPrev = makeClickHandler(totalPages, selectedPage, onClickPage, -1)
    const handleClickNext = makeClickHandler(totalPages, selectedPage, onClickPage, 1)

    return (
        <nav>
            <ul>
                <li onClick={handleClickPrev}>Prev</li>
                {
                    Array.from(Array(totalPages), (_, i) => i+1)
                        .map(x => (
                                <li key={x} onClick={makeClickHandler(totalPages, x, onClickPage)}>
                                    {selectedPage === x ? '['+x+']' : x}
                                </li>
                            )
                        )
                }
                <li onClick={handleClickNext}>Next</li>
            </ul>
        </nav>
    )
}

function clamp(value, min, max) {
    if(value < min) {
        return min
    }
    if(value > max) {
        return max
    }
    return value
}

function makeClickHandler(totalPages, selectedPage, onClickPage, pageShift=0) {
    return (event) => {
        const newPage = clamp(selectedPage + pageShift, 1, totalPages)
        onClickPage && onClickPage(newPage)
    }
}