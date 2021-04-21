import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

function SearchProduct() {
    const [keyword, setKeyword] = useState('')

    let history = useHistory()

    const submitHandler = (e) => {
        e.preventDefault()
        if (keyword) {
            history.push(`/result_products/?keyword=${keyword}&page=1`)
        } else {
            history.push(history.push(history.location.pathname))
        }
    }
    return (
        <Form onSubmit={submitHandler} inline>
            <Form.Control
                type='text'
                name='q'
                placeholder='Search for a product '
                className='p-3'
                onChange={e => setKeyword(e.target.value)}
                style={{ width: "250px" }}
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

export default SearchProduct

