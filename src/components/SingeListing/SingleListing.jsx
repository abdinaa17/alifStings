// Global Imports
import { Card, Row, Col} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const SingleListing = ({image, id, title, address, rating, numReviews, city, tagline}) => {
  return (
    <div className='container'>
            <Card className='cursor-pointer'>
                <Link to={`/listings/${id}`}>
                <Card.Img style={{height:300, objectFit:'cover'}} variant="top" src={image} alt={title} />
                </Link>
                
                    <Card.Body>
                       <Card.Title className="my-2">{title}</Card.Title>
                       <Card.Subtitle className="my-2 text-danger">{tagline}</Card.Subtitle>
                       <Card.Text className="my-2">
                       {address} {city}
                       </Card.Text>
                       <Row>

                          <Col><p>{numReviews} reviews</p></Col>

                          <Col><p>{rating} ratings</p></Col>

                      </Row>
                   </Card.Body>
               </Card>
    </div>
  )
}
export default SingleListing