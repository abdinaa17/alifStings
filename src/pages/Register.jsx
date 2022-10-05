import React from 'react'
import { Col, Row, Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Register = () => {

    const handleSubmit = (e) => {
        //
    }
  return (
    <section className='container'>
        <Row>
            <Col lg={4} md={6}>
                <Form onSubmit={handleSubmit} className="w-75 my-2 mx-auto">
                    <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                        type="email"
                        autoComplete='off'
                        placeholder="E.g user@email.com..." />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                        type="password"
                        placeholder="Enter password here..." />
                    </Form.Group>
                     <Button className="w-100" type="submit">Register</Button>
                </Form>
            </Col>
        </Row>
    </section>
  )
}

export default Register