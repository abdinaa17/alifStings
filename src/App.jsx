// Global Imports
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
// Local Imports
import "./App.css";
import { auth } from "./config/firebase";
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
  ProfilePage,
  EditListingPage,
} from "./pages";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const [user] = useAuthState(auth);
  return (
    <main>
      <Router>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<PrivateRoute />}>
            <Route path="/dashboard">
              <Route index element={<DashboardPage />} />
              <Route path="profile" element={<ProfilePage />} />
            </Route>
          </Route>
          {/* <Route path="/edit-listing" element={<PrivateRoute />}>
            <Route paht="/edit-listing/:id" element={<EditListingPage />} />
          </Route> */}
          <Route path="edit-listing/:id" element={<EditListingPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="listings" element={<ListingsPage />} />
          <Route path="listings/:id" element={<SingleListingPage />} />
          <Route path="coming-soon" element={<ComingSoon />} />
          <Route path="new-listing" element={<NewListingPage />} />
          <Route
            path="login"
            element={user ? <Navigate to="/" /> : <LoginPage />}
          />
          <Route
            path="register"
            element={user ? <Navigate to="/" /> : <RegisterPage />}
          />
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
