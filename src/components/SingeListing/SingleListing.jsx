// Global Imports
import { Card, Row, Col} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const SingleListing = ({image, id, title, address, description, city}) => {
  return (
    <div className='container'>
            <Card className='cursor-pointer'>
                <Link to={`/listings/${id}`}>
                <Card.Img variant="top" src={image} alt={title} />
                </Link>
                
                    <Card.Body>
                       <Card.Title className="my-2">{title}</Card.Title>
                       <Card.Subtitle className="my-2 text-danger">{address} {city}</Card.Subtitle>
                       <Card.Text className="my-2">
                           {description.length > 100 ? description.substring(0,100) + '...': description }
                       </Card.Text>
                   </Card.Body>
               </Card>
    </div>
  )
}
export default SingleListing