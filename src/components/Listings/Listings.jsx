// Global Imports
import { useEffect } from "react";
import { useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
// Local Imports
import { useListings } from "../../context/ListingsContext";
import { ListingCard } from "../index";
import { LoadingSpinner } from "../index";

const Listings = () => {
  const { listings, isLoading } = useListings();
  const [filteredListings, setFilteredListings] = useState(listings);
  let { state } = useLocation();
  const [searchKeyWord, setSearchKeyWord] = useState(state ? state : "");
  const [category, setCategory] = useState("");
  // const [suggested, setSuggested] = useState("");

  // Select on change
  const selectHandleChange = (e) => {
    const value = e.target.value;
    setCategory(value);
  };

  // Suggest on change
  // const suggestHandleChange = (e) => {
  //   const value = e.target.textContent;
  //   setSuggested(value);
  // };

  const applyFilters = () => {
    let tempListings = [...listings];

    // Filter based on the search text
    if (searchKeyWord) {
      tempListings = tempListings.filter((listing) =>
        listing.title.toLowerCase().includes(searchKeyWord.toLowerCase())
      );
    }

    // Filter based on selected category
    if (category) {
      tempListings = tempListings.filter((listing) => {
        if (category === "restaurant") {
          return listing.category === "restaurant";
        } else if (category === "daycare") {
          return listing.category === "daycare";
        } else if (category === "mosque") {
          return listing.category === "mosque";
        }

        return listing;
      });
    }
    setFilteredListings(tempListings);
  };

  useEffect(() => {
    applyFilters();
  }, [category, searchKeyWord]);

  const clearFilters = () => {
    setSearchKeyWord("");
    setCategory("");
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <section className="container">
      <Row>
        <Col md={2}>
          <Row className="g-3 mb-5 mt-2">
            <Col>
              <Form>
                <Form.Control
                  type="text"
                  value={searchKeyWord}
                  onChange={(e) => setSearchKeyWord(e.target.value)}
                  placeholder="Search for listings..."
                  className="px-3 mt-2"
                  style={{ maxWidth: "300px" }}
                />
                <Form.Group className="mx-auto">
                  <h4 className="mt-5">Categories</h4>
                  <Form.Select
                    style={{ maxWidth: "300px" }}
                    onChange={selectHandleChange}
                    value={category}
                  >
                    <option value="all">All</option>
                    <option value="restaurant">Restaurants</option>
                    <option value="mosque">Mosques</option>
                    <option value="daycare">Daycares</option>
                  </Form.Select>
                </Form.Group>
              </Form>
              {/* <div>
                <h4 className="mt-5">Suggested</h4>
                <Button
                  className="bg-light border-0 rounded-pill m-1 text-primary"
                  name="suggested"
                  onClick={suggestHandleChange}
                >
                  Open Now
                </Button>
                <Button
                  className="bg-light border-0 rounded-pill m-1 text-primary"
                  name="suggested"
                  onClick={suggestHandleChange}
                >
                  Offers Delivery
                </Button>
                <Button
                  className="bg-light border-0 rounded-pill m-1 text-primary"
                  name="suggested"
                  onClick={suggestHandleChange}
                >
                  Offers Takeout
                </Button>
              </div> */}
              <div>
                <Button
                  onClick={clearFilters}
                  variant="custom"
                  className="mt-5"
                >
                  Clear FIlters
                </Button>
              </div>
            </Col>
          </Row>
        </Col>
        <Col md={10}>
          <Row className="g-4 mt-2 ps-2">
            {filteredListings && filteredListings.length > 0 ? (
              <>
                {/* {!state && (
                  <h2 className="mx-auto">No Listing matched: '{state}'</h2> // Come back to this.
                )} */}
                {filteredListings.map((listing) => {
                  return (
                    <motion.div
                      className="col-sm-12 col-md-6 col-lg-4"
                      key={listing.id}
                      layout
                    >
                      <AnimatePresence />
                      <ListingCard {...listing} />
                    </motion.div>
                  );
                })}
              </>
            ) : (
              <div className="vh-50 text-center">
                {searchKeyWord ? (
                  <>
                    <h1>
                      No Listings matched '
                      <span className="opacity-75 fst-italic">
                        {searchKeyWord}
                      </span>
                      '
                    </h1>
                    <Button
                      onClick={clearFilters}
                      variant="custom"
                      className="mt-3"
                    >
                      Clear FIlters
                    </Button>
                  </>
                ) : (
                  <h1>No Lisitngs found</h1>
                )}
              </div>
            )}
          </Row>
        </Col>
      </Row>
    </section>
  );
};

export default Listings;
