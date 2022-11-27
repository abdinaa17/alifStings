// Global Imports

// Local Imports
import {
  Blogs,
  Faqs,
  FeaturedListings,
  Hero,
  LoadingSpinner,
  Testimonials,
} from "../components";
const Home = () => {
  return (
    <section>
      <Hero />
      <FeaturedListings />
      <Testimonials />
      <Faqs />
      <Blogs />
    </section>
  );
};

export default Home;
