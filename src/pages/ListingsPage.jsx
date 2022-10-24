// Global Imports
import { Button, Col, Form, FormControl, Row } from "react-bootstrap";
import { FaList } from "react-icons/fa";

// Local Imports

import { Listings } from "../components";
const ListingsPage = () => {
  return (
    <section className="page py-5">
      <Listings />
    </section>
  );
};

export default ListingsPage;
