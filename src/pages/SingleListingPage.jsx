// Global Imports
import { useState } from "react"
import { Col, Row } from "react-bootstrap"
import { Link, useParams } from "react-router-dom"
import {MdPlace} from 'react-icons/md'

//Local Imports
import { mockDB } from "../data/mockDB"

const SingleListing = () => {

  const {id} = useParams()
  const listing = mockDB.find((listing) => listing.id === id)
  const [currentImg, setCurrentImg] = useState(listing.gallary[0])
  


  return (
    <section>
      <Row className="container py-5">
        <Col md={8}>
        <img src={currentImg} alt={listing.title} className="rounded mb-3 w-100"/>
      <Row className="my-3">
        {listing.gallary.map((image, idx) => {
          return <Col key={idx}><img role="button" src={image} alt={listing.title} onClick={()=> setCurrentImg(listing.gallary[idx])}/></Col>
        })}
      </Row>
      <h1>{listing.title}</h1>
      <p className="opacity-75">{listing.description}</p>
      <Row>
        <Col><p>{listing.numReviews} reviews</p></Col>
        <Col><p>{listing.rating} ratings</p></Col>
      </Row>
      <Row>
        <Col><p>Address: <MdPlace /> {listing.address} {listing.city}</p></Col>
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
