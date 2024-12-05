import { useCallback, useEffect, useState } from "react";
import Header from "@/components/Header";
import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAuB_-EBXaIBrupy1iaWz3qu_WjaV7GYus",
  authDomain: "exercise-six-e889c.firebaseapp.com",
  projectId: "exercise-six-e889c",
  storageBucket: "exercise-six-e889c.firebasestorage.app",
  messagingSenderId:"174486622927",
  appId: "1:174486622927:web:f2cdb9b789752ff78dddba",
};

export default function App({ Component, pageProps }) {
  const [appInitialized, setAppInitialized] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInformation, setUserInformation] = useState(null);
  const [error, setError] = useState(null);

  // const createUserFunction = useCallback((e) => {
  //   e.preventDefault();
  //   const email = e.currentTarget.email.value;
  //   const password = e.currentTarget.password.value;
  //   const auth = getAuth();

  //   createUserWithEmailAndPassword(auth, email, password)
  //     .then((userCredential) => {
  //       const user = userCredential.user;
  //       // User is created, set logged in
  //       setIsLoggedIn(true);
  //       // Provide some information about the user via setState
  //       setUserInformation(user);
  //       // Clear any errors
  //       setError(null);
  //     })
  //     .catch((error) => {
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       console.warn({ error, errorCode, errorMessage });
  //       setError(errorMessage);
  //     });
  // }, []);

  // const loginUserFunction = useCallback((e) => {
  //   e.preventDefault();
  //   // Assign Email and Password to variables from form
  //   const email = e.currentTarget.email.value;
  //   const password = e.currentTarget.password.value;
  //   // Create a reference to the auth object
  //   const auth = getAuth();
  //   signInWithEmailAndPassword(auth, email, password)
  //     .then((userCredential) => {
  //       const user = userCredential.user;
  //       // Since the user is true, set logged in
  //       setIsLoggedIn(true);
  //       // Provide some information about the user via setState
  //       setUserInformation(user);
  //       // Clear Errors
  //       setError(null);
  //     })
  //     .catch((error) => {
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       console.warn({ error, errorCode, errorMessage });
  //       setError(errorMessage);
  //     });
  // }, [setError, setIsLoggedIn, setUserInformation]);
  
  // const logoutUserFunction = useCallback(() => {
  //   const auth = getAuth();
  //   signOut(auth)
  //     .then(() => {
  //       setUserInformation(null);
  //       setIsLoggedIn(false);
  //     })
  //     .catch((error) => {
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       console.warn({ error, errorCode, errorMessage });
  //       setError(errorMessage);
  //     });
  // }, [setError, setIsLoggedIn, setUserInformation]);

  // useEffect(() => {
  //   initializeApp(firebaseConfig);
  //   setAppInitialized(true);
  // }, []);

  // useEffect(() => {
  //   if (appInitialized) {
  //     const auth = getAuth();
  //     onAuthStateChanged(auth, (user) => {
  //       if (user) {
  //         // User is signed in
  //         setUserInformation(user);
  //         setIsLoggedIn(true);
  //       } else {
  //         // User is signed out
  //         setUserInformation(null);
  //         setIsLoggedIn(false);
  //       }
  //       setIsLoading(false);
  //     });
  //   }
  // }, [appInitialized]);

  console.log(userInformation);

  if (isLoading) return null;

  return (
    <>
      {/* <Header isLoggedIn={isLoggedIn} logoutUserFunction={logoutUserFunction} /> */}
      <Component
        {...pageProps}
        // createUser={createUserFunction}
        // isLoggedIn={isLoggedIn}
        // loginUserFunction={loginUserFunction}
        // userInformation={userInformation}
      />
      <p>{error}</p>
    </>
  );
}
