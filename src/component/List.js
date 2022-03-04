import React from 'react'

import { Container, Row, Col, Card, Button } from 'react-bootstrap'

import contentData from '../fakeData/contentData'

export default function List() {
    return (
        <Container>
            <Row>
                {contentData.map((data, index) => (
                    <Col md={3} >
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={data.image} />
                            <Card.Body>
                                <Card.Title>{data.name}</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}
