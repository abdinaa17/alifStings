// Global Imports
import { Form, Button } from "react-bootstrap"

const NewListing = () => {
  return (
    <div>
        h1
        <Form className="w-50">
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
      <Button variant="custom" type="submit">
        Add Your Listing
      </Button>
      </Form>
    </div>
  )
}

export default NewListing