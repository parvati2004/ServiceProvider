import { useState } from "react";


export const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

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
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log( user);
    // 👉 Here you can call your backend API for login
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
