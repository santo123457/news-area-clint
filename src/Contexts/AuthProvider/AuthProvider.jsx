import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../../Firebase/Firebase.config";
export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {


  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //  login with google

  const providerLogIn = (provider) => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };
  

  //   register with email and password

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // login/sign in with email and password

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
    if (currentUser === null||currentUser.emailVerified) /*that means currentUser.emailVerified === true */
    
    {  
        setUser(currentUser);
    }
      
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  // send name and photoUrl (you will find thin on manage users in firebase)

  const updateUserProfile = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };

  // Verification email (1.manage users 2.send a user a verification email)

  const verifyEmail = () =>{
    return sendEmailVerification(auth.currentUser);
  }


  // Log out from everywhere

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  //  sending information with auth context;

  const AuthInfo = {
    user,
    loading,
    setLoading,
    providerLogIn,
    logOut,
    createUser,
    signIn,
    updateUserProfile,
    verifyEmail
  };
  return (
    <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
