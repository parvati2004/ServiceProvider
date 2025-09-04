import { createContext, useContext, useEffect, useState } from "react";


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token") || "");

  const [user,setUser]=useState("");
  const [services,setServices]=useState("");
  const authorizationToken=`Bearer ${token}`;
  // Function to store token in localStorage AND update state
  const storeTokenInLS = (serverToken) => {
    setToken(serverToken);
    return localStorage.setItem("token", serverToken);
     // this triggers a re-render
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
        Authorization:authorizationToken,
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
//to fetch the services data from the database
const getServices=async()=>{
  try{
    const response=await fetch("http://localhost:5000/api/data/service",{
      method:"GET",
    });
    if(response.ok)
    {
      const data=await response.json();
      console.log(data.msg);
      setServices(data.msg);

    }

  }
  catch(error)
  {
    console.log(`services frontend error: ${error}`)
  }

}



useEffect(()=>{
  getServices();
  userAuthentication();
},[]);



  return (
    <AuthContext.Provider value={{ isLoggedIn, storeTokenInLS, LogoutUser ,user,
      services,authorizationToken
    }}>
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
