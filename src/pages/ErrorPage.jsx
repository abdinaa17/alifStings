import { Link } from "react-router-dom"
import { Button } from "react-bootstrap"

const Error = () => {
  return (
    <div className='container'>
        <h1>404</h1>
        <h2>Page not found</h2>
        <Link to="/">
            <Button>Back To Home....</Button>
        </Link>
    </div>
  )
}

export default Error