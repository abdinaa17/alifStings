// Global Imports
import { Card, Col, Row } from "react-bootstrap"



// Local Imports
import '../Testimonials/Testimonials.css'
import { testimonials } from "../../data/testimonials"
import {Rating} from '../index'

const Testimonials = () => {

  return (
    <div className='container py-5 testimonial'>
      <h2 className="text-uppercase text-center my-5">Customer Testimonials</h2>
      <p className="text-center my-2 mx-auto">Checkout what people are saying about our commuity businesses</p>
      <Row className="w-75 mx-auto my-3 gy-5" >
        {testimonials.map((testimonial) => {
          const {id, name, image, rating, desc, details} = testimonial
          return (
            <Col md={6} lg={4} key={id}>
              <Card className="p-2">
                <Row>
                  <Col className="d-flex align-items-center">
                    <img src={image}  alt={name} className="card-img"/>
                    <p className="mx-auto my-0 ">{name}</p>
                    <Rating rating={rating}/>
                  </Col>
                </Row>
                <h4>{desc}</h4>
                <p>{details}</p>
                <hr />
              </Card>
        </Col>
          )
        })}
      </Row>
    </div>
  )
}
export default Testimonials