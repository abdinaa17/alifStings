// Global Imports


// Local Imports
import comingSoon from "../assets/images/coming-soon.svg"

const ComingSoon = () => {
  return (
    <section className='container p-5 vh-100 d-flex align-items-center'>
      <div>
        <h1>Coming Soon!</h1>
        <img src={comingSoon} alt="Coming Soon" />
      </div>
    </section>
  )
}

export default ComingSoon