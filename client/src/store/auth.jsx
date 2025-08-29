import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token") || "");

  const [user,setUser]=useState("");
  // Function to store token in localStorage AND update state
  const storeTokenInLS = (serverToken) => {
    localStorage.setItem("token", serverToken);
    setToken(serverToken); // this triggers a re-render
  };

  const isLoggedIn = !!token;
  console.log("isLoggedIn", isLoggedIn);

  // Logout functionality
  const LogoutUser = () => {
    setToken(""); // update state
    localStorage.removeItem("token"); // remove from storage
  };
//JWT Authentication- to get the currently loggedIn user data

const userAuthentication=async()=>{
  try{
    const response=await fetch("http://localhost:5000/api/auth/user",{
      method:"GET",
      headers:{
        Authorization:`Bearer ${token}`,
      },
    });
    if(response.ok)
    {
      const data=await response.json();
      console.log("user Data",data.userData);
      setUser(data.userData);
    }
    else{
      console.log("Error fetching user data");
    }

  }
  catch(error)
  {
    console.log("Error fetching user data");

  }

};
useEffect(()=>{
  userAuthentication();
},[]);



  return (
    <AuthContext.Provider value={{ isLoggedIn, storeTokenInLS, LogoutUser ,user}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const authContextValue = useContext(AuthContext);
  if (!authContextValue) {
    throw new Error("useAuth used outside of the Provider");
  }
  return authContextValue;
};
