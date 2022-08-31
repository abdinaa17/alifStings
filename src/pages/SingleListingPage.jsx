// Global Imports
import { useState } from "react"
import { Col, Row } from "react-bootstrap"
import { Link, useParams } from "react-router-dom"
import {MdPlace} from 'react-icons/md'

//Local Imports
import { mockDB } from "../data/mockDB"
import { Rating } from "../components"

const SingleListing = () => {

  const {id} = useParams()
  const listing = mockDB.find((listing) => listing.id === id)

  const {
    title,
    rating,
    numReviews,
    address,
    city,
    gallary,
    description

  } = listing;

  const [currentImg, setCurrentImg] = useState(gallary[0])

  return (
    <section>
      <Row className="container py-5">
        <Col md={8}>
        <img src={currentImg} alt={title} className="rounded mb-3 w-100"/>
      <Row className="my-3">
        {gallary.map((image, idx) => {
          return <Col key={idx}><img role="button" src={image} alt={title} onClick={()=> setCurrentImg(gallary[idx])}/></Col>
        })}
      </Row>
      <h1>{title}</h1>
      <p className="opacity-75">{description}</p>
      <Row>
        <Col><Rating rating={rating} /></Col>
        <Col><p>{numReviews} reviews</p></Col>
      </Row>
      <Row>
        <Col><p>Address: <MdPlace /> {address} {city}</p></Col>
      </Row>
      </Col>
      <Col md={4}>
        Map here
      </Col>
    
      </Row>
      <Link to="/listings">Go back</Link>
    </section>
  )
}

export default SingleListing
