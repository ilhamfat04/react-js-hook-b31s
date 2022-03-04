import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'

export default function ExampleComp(props) {
    const { user } = props

    useEffect(() => {
        console.log(user);
    }, [props])

    return <Container>Email : {props.user.email}</Container>
}
