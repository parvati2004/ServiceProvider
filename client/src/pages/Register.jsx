export const  Register=()=>{
    const [user,setUser]=useState({
        username:"",
        email:"",
        phone:"",
        password:""
    });
    return <>
    <section>
    <main>
    <div className="section-registration">
    <div className="container grid grid-two-cols">
    <div className="registration-image">
    <img src="/images/register.jpg" alt="register"
    width="600" height="600"
    />
    </div>
    {/*lets tackle registration form */}
    <div className="registration-form">
    <h1 className="text-3xl font-bold text-gray-800 mb-6 uppercase tracking-wide">registration form</h1>
    <br/>
    <form >
    <div>
    <label htmlFor="username">username</label>
    <input 
    type ="text"
     name="username" 
      placeholder="username"
       id="username"
       required
       autoComplete="off"
       />
    </div>
     <div>
    <label htmlFor="email">email</label>
    <input 
    type ="text"
     name="email" 
      placeholder="Enter your email"
       id="email"
       required
       autoComplete="off"
       />
    </div>
     <div>
    <label htmlFor="phone">phone</label>
    <input 
    type ="number"
     name="phone" 
      placeholder="phone"
       id="phone"
       required
       autoComplete="off"
       />
    </div>
     <div>
    <label htmlFor="password">password</label>
    <input 
    type ="password"
     name="password" 
      placeholder="Enter your password"
       id="password"
       required
       autoComplete="off"
       />
    </div>
    <br/>
    <button type="submit" className="btn btn-submit">Register Now</button>
    </form>
    </div>
    </div>
    </div>
    </main>
    </section>
    </>

};
