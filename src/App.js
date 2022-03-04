//import useState & useEffect here
import { useEffect, useState, useContext } from 'react'
import {
    Container,
    Row, Col, Form,
    Button
} from 'react-bootstrap'

import Welcome from './Welcome'
import GuestGreeting from './GuestGreeting'

import List from './component/List'

import { UserContext } from './context/userContext'

import ExampleComp from './ExampleComp'

function App() {

    const [state, dispatch] = useContext(UserContext)

    console.log(state);

    const handleOnSubmit = (e) => {
        e.preventDefault()
        const email = document.getElementById('email').value
        const password = document.getElementById('password').value

        const data = {
            email,
            password
        }

        dispatch({
            type: "LOGIN_SUCCESS",
            payload: data
        })
    }

    return (
        <>
            <List />
            {/* <ExampleComp />
            {state.isLogin ? <Welcome /> :
                (<>
                    <GuestGreeting />
                    <Container>
                        <Row
                            className="d-flex justify-content-center mt-5">
                            <Col md="4">
                                <Form onSubmit={handleOnSubmit}>
                                    <div className="text-center h5">Login</div>

                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control
                                            id="email"
                                            name="email" size="sm" type="email"
                                            placeholder="Enter email" />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control
                                            id="password"
                                            name="password" size="sm" type="password"
                                            placeholder="Password" />
                                    </Form.Group>

                                    <Button variant="primary" type="submit" size="sm">
                                        Submit
                                    </Button>
                                </Form>
                            </Col>
                        </Row>
                    </Container>
                </>)} */}
        </>
    )
}

export default App;