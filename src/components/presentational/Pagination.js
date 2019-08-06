import React from 'react'

export default class Pagination extends React.PureComponent {
    clamp(value, min, max) {
        if(value < min) {
            return min
        }
        if(value > max) {
            return max
        }
        return value
    }

    makeClickHandler = (selectedPage, pageShift=0) => {
        const {
            totalPages,
            onClickPage
        } = this.props
        const {
            clamp
        } = this

        return (event) => {
            const newPage = clamp(selectedPage + pageShift, 1, totalPages)

            if(onClickPage) {
                onClickPage(newPage)
            }
        }
    }

    render() {
        const {
            totalPages,
            selectedPage
        } = this.props
        const {
            makeClickHandler
        } = this

        return (
            <nav>
                <ol>
                    <li onClick={makeClickHandler(selectedPage, -1)}>Prev</li>
                    {
                        Array.from(Array(totalPages), (_, i) => i+1)
                            .map(x => (
                                    <li key={x} onClick={makeClickHandler(x)}>
                                        {selectedPage === x ? '['+x+']' : x}
                                    </li>
                                )
                            )
                    }
                    <li onClick={makeClickHandler(selectedPage, 1)}>Next</li>
                </ol>
            </nav>
        )
    }
}