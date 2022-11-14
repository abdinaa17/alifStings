// Global Imports
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Local Imports
import "./App.css";
import { Footer, Header, PrivateRoute } from "./components";
import {
  HomePage,
  AboutPage,
  ListingsPage,
  ErrorPage,
  SingleListingPage,
  ComingSoon,
  NewListingPage,
  LoginPage,
  RegisterPage,
  ContactPage,
  ServicesPage,
  PricingPage,
  DashboardPage,
} from "./pages";

function App() {
  return (
    <main>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<PrivateRoute />}>
            <Route path="/dashboard" element={<DashboardPage />} />
          </Route>
          <Route path="about" element={<AboutPage />} />
          <Route path="listings" element={<ListingsPage />} />
          <Route path="listings/:id" element={<SingleListingPage />} />
          <Route path="coming-soon" element={<ComingSoon />} />
          <Route path="new-listing" element={<NewListingPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="pricing" element={<PricingPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </Router>
    </main>
  );
}

export default App;
