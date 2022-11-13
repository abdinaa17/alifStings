// Global imports
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../config/firebase";
import { db } from "../config/firebase";
import { collection, getDocs, query } from "firebase/firestore";

const ListingsContext = createContext();

export const ListingsProvider = ({ children }) => {
  const [listings, setListings] = useState([]);

  // Initialize db and get data
  const fetchListings = async () => {
    try {
      const listingsRef = collection(db, "listings");
      const q = query(listingsRef, orderBy("timestamp", "desc"));

      const unsbuscribe = onSnapshot(q, (snapshot) => {
        setListings(
          snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        );
      });
      return unsbuscribe;
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchListings();
  }, []);
  //
  const values = {
    listings,
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
