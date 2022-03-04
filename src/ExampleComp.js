import React, { useEffect, useContext } from 'react'
import { Container } from 'react-bootstrap'

import { UserContext } from './context/userContext'

export default function ExampleComp() {

    const [state, dispatch] = useContext(UserContext)

    return <Container>Email : {state?.user?.email}</Container>
}
