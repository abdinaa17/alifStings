import React from 'react'
import { Col, Row, Form, Button } from 'react-bootstrap'
import { FaFacebook, FaGoogle } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Login = () => {

    const handleSubmit = (e) => {
        //
    }
  return (
    <section className='container'>
        <Row>
            <Col lg={8} md={6}>
                <Form onSubmit={handleSubmit} className="w-50 my-4 mx-auto">
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
                     <Button className='w-100' type="submit">Login</Button>
                     <div className="pt-3">
                        <p>Or Login With</p>
                         <Link to="/" className="p-2 text-info" >
                            <FaGoogle size={24} />
                        </Link>
                         <Link to="/" className="p-2 text-info" >
                            <FaFacebook size={24} />
                        </Link>
                     </div>
                     <div className="mx-auto">
                        <p><small className='text-capitalize'>Don't have an account? <Link to='/register'>Register Here</Link> </small></p>
                        <p><small className='text-capitalize'>Forgot Password?<Link to='/register'> reset it Here</Link> </small></p>
                        
                     </div>
                </Form>
            </Col>
            <Col lg={4} md={6} className="bg-danger">
                <div className="my-4 mx-auto"></div>
                    Some other Info here and placeholer images
            </Col>
        </Row>
    </section>
  )
}

export default Login