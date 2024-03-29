// Global imports
import { createContext, useContext, useEffect, useState } from "react";
import { db } from "../config/firebase";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";

const ListingsContext = createContext();

export const ListingsProvider = ({ children }) => {
  const [listings, setListings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  // Initialize db and get data
  const fetchListings = async () => {
    try {
      const listingsRef = collection(db, "listings");
      const q = query(listingsRef, orderBy("timestamp", "desc"));

      const unsbuscribe = onSnapshot(q, (snapshot) => {
        setListings(
          snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        );
        setIsLoading(false);
      });
      return unsbuscribe;
    } catch (err) {
      setError(err);
    }
  };
  useEffect(() => {
    fetchListings();
  }, []);
  //
  const values = {
    listings,
    isLoading,
    error,
  };
  return (
    <ListingsContext.Provider value={values}>
      {children}
    </ListingsContext.Provider>
  );
};

export const useListings = () => {
  return useContext(ListingsContext);
};
