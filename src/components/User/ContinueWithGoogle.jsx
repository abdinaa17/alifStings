// Global Imports
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getDoc, setDoc, doc, serverTimestamp } from "firebase/firestore";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

// Local Imports
import { auth, db } from "../../config/firebase";

const ContinueWithGoogle = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const loginWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // Register user if they don't extist
      const userRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(userRef);
      if (!docSnap.exists()) {
        await setDoc(userRef, {
          email: user.email,
          timestamp: serverTimestamp(),
        });
      }
      navigate("/dashboard");
    } catch (err) {
      setError(err);
    }
  };
  return (
    <Button
      onClick={loginWithGoogle}
      variant="custom"
      className="icon-text mx-auto w-75 mb-3"
    >
      <FcGoogle size={24} className="me-2" /> Continue with Google
    </Button>
  );
};

export default ContinueWithGoogle;
