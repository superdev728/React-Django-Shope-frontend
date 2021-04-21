import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

function SearchShop() {
    const [keyword, setKeyword] = useState('')

    let history = useHistory()

    const submitHandler = (e) => {
        e.preventDefault()
        if (keyword) {
            history.push(`/result_shops/?keyword=${keyword}&page=1`)
        } else {
            history.push(history.push(history.location.pathname))
        }
    }
    return (
        <Form onSubmit={submitHandler} inline>
            <Form.Control
                type='text'
                name='q'
                placeholder=' Suche nach: Name / PLZ / Stadt / Land ...'
                className='p-3'
                onChange={e => setKeyword(e.target.value)}
                style={{ width: "300px" }}
            ></Form.Control>

            <Button 
                className='p-2'
                type ='submit'
                variant='outline-success'
            >
                Go
            </Button>
        </Form>
    )
}

export default SearchShop

