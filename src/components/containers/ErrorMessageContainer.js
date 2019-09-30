import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ErrorMessage from '../presentational/ErrorMessage'
import { getError } from '../../reducers'
import { actionPopError } from '../../actions'

export default function ErrorMessageContainer() {
    const MESSAGE_TIME = 2000
    const errorMessage = useSelector(getError)
    const dispatch = useDispatch()
    
    useEffect(() => {
        if(!errorMessage) {
            return
        }
        const timeout = setTimeout(() => dispatch(actionPopError()), MESSAGE_TIME)
        return () => clearTimeout(timeout)
    }, [errorMessage, dispatch])

    return (
        <>
            { errorMessage && <ErrorMessage text={errorMessage} /> }
        </>
    )
}