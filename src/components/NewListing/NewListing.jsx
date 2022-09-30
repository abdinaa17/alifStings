// Global Imports
import { Form, Button } from "react-bootstrap"



// Local Imports
import '../NewListing/NewListing.css'

const NewListing = () => {
  return (
     <div>
        <div className="banner px-3 py-5">
           <h1 className='mb-5 text-center text-capitalize text-white'>Fill the Form to add new listing</h1>
        </div>
        <div className="form px-3 py-5">
          <Form className="">
      <Form.Group className="mb-3">
        <Form.Label>Listing Title</Form.Label>
        <Form.Control type="text" placeholder="Enter listing..." />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Tag Line</Form.Label>
        <Form.Control type="text" placeholder="Enter tag line..." />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" placeholder="Describe Your Business..." />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Address</Form.Label>
        <Form.Control type="text" placeholder="Enter Address..." />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>City</Form.Label>
        <Form.Control type="text" placeholder="Enter City..." />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Owner</Form.Label>
        <Form.Control type="text" placeholder="Enter Owner's name..." />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Check type="checkbox" label="Featured" />
      </Form.Group>
      <Button  type="submit">
        Add Your Listing
      </Button>
      </Form>
        </div>

    </div>
  )
}

export default NewListing