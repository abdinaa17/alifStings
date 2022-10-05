// Global Imports
import { Form, Button, FloatingLabel, Row, Col } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { useState } from "react"


// Local Imports
import '../NewListing/NewListing.css'

const NewListing = () => {
  const [formError, setFormError] = useState(false)
  const [listing, setListing] = useState({
    "title": "",
    "tagline": "",
    "desc": "",
    "address": "",
    "city": "",
    "owner": "",
    "featured": false,

  })

  const navigate = useNavigate()

  const handleChange = (e) => {
    setListing({...listing, [e.target.name]: e.target.value})
  }
  // Form Submission
  const handleSubmit = (e) => {
    e.preventDefault()
    if(!listing.title || !listing.tagline || !listing.desc || !listing.address || !listing.city || !listing.owner) {
      setFormError(true)
      return
    }
    const listingId = Math.floor(Math.random() * 1000)
    const newListing = {...listing, listingId}
    console.log(newListing)
    setFormError(false)
    // navigate('/listings', {replace:true}) 
  }
  return (
     <div>
        <div className="banner px-3 py-5">
           <h1 className='mb-5 text-center text-capitalize text-white'>Fill the Form to add new listing</h1>
        </div>
        <div className="form px-3 py-5">
            <h4 className="text-center">Primary Listing Details</h4>
            <Row>
                <Col md={8}>
                  <Form onSubmit={handleSubmit} className="w-75 mx-auto">
                    <Form.Group className="mb-3">
                      <Form.Label>Listing Title</Form.Label>
                      <Form.Control 
                        type="text"
                        name="title"
                        value={listing.title}
                        onChange={handleChange} 
                        placeholder="Enter listing name..." />
                    </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Tag Line</Form.Label>
                    <Form.Control
                      type="text"
                      name="tagline"
                      value={listing.tagline}
                      onChange={handleChange}  
                      placeholder="E.g Best Place In The City..." />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <FloatingLabel
                      label="Description of the listing">
                    <Form.Control
                      as="textarea"
                      name="desc"
                      value={listing.desc}
                      onChange={handleChange} 
                      placeholder="Leave a comment here"
                      style={{ height: '200px' }}
                    />
                  </FloatingLabel>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Address</Form.Label>
                    <Form.Control 
                      type="text"
                      name="address"
                      value={listing.address}
                      onChange={handleChange}  
                      placeholder="Enter Address..." />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>City</Form.Label>
                    <Form.Control
                      type="text"
                      name="city"
                      value={listing.city}
                      onChange={handleChange}  
                      placeholder="Enter City..." />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Owner</Form.Label>
                    <Form.Control 
                      type="text"
                      name="owner" 
                      value={listing.owner}
                      onChange={handleChange} 
                      placeholder="Enter Owner's name..." />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Check 
                    type="checkbox"
                    name="featured" 
                    value={listing.featured}
                    onChange={handleChange}
                    // checked={listing.featured === true}
                    label="Check box if you want your listing to be featured" />
                  </Form.Group>
                 <Button type="submit">Add Your Listing</Button>
                 {formError && <p className="lead  text-danger mt-3">Please Fill in all fields</p>}
            </Form>
          </Col>
          <Col md={4}>

          </Col>
      </Row>
        </div>

    </div>
  )
}

export default NewListing