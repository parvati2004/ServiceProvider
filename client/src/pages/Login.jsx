import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
const URL="http://localhost:5000/api/auth/login";
export const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
   const navigate=useNavigate();
   const {storeTokenInLS}=useAuth();

  // handle input
  const handleInput = (e) => {
    let name= e.target.name;
    let value=e.target.value;
    setUser({
      ...user,
      [name]: value,
    });
  };

  // handle submit
  const handleSubmit = async(e) => {
    e.preventDefault();
    
    // 👉 Here you can call your backend API for login

       try{
        const response= await fetch(URL,{
      method :"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(user),


    });
      console.log("login form",response);
    if(response.ok)
    {
       alert("Login successfully");
       const res_data=await response.json();
       storeTokenInLS(res_data.token);
     
      setUser({   email: "", password: "" });
      navigate("/");
      

    }
    else{
      alert("Invalid credential");
    }
    }
    catch(error)
    {
      console.log("register",error);

    }
 
  };
  

  return (
    <>
      <section>
        <main>
          <div className="section-login">
            <div className="container grid grid-two-cols">
              {/* login image */}
              <div className="registration-image reg-img">
                <img
                  src="/images/login.png"
                  alt="login"
                  width="600"
                  height="600"
                />
              </div>

              {/* login form */}
              <div className="registration-form">
                <h1 className="main-heading mb-3">
                  Login form
                </h1>
                <br />
                <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      id="email"
                      required
                      autoComplete="off"
                      value={user.email}
                      onChange={handleInput}
                    />
                  </div>

                  <div>
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      name="password"
                      placeholder="Enter your password"
                      id="password"
                      required
                      autoComplete="off"
                      value={user.password}
                      onChange={handleInput}
                    />
                  </div>

                  <br />
                  <button type="submit" className="btn btn-submit">
                    Login Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};
