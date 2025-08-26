import { useState } from "react"

export const  Contact=()=>{
      const[contact,setContact]=useState({
            username:"",
            email:"",
            message:""
        })
        const handleInput=(e)=>{
           const  name=e.target.name;
           const value=e.target.value;

            setContact({
            ... contact,
            [name]:value,
        })



        };

        const handleSubmit=(e)=>{
            e.preventDefault();

            console.log(contact);
        }
       


    return (
      

        <>
        <section className="section-contact">
        <div className="contact-content container">
        <h1 className="main-heading">contact us</h1>
        </div>
        {/* contact page main */}
        <div className="container grid grid-two-cols">
        <div className="contact-img">
        <img src="/images/support.png" alt="we are always ready to help"
        />
        </div>

        {/*contact form  content actual */}
        <section className="section-form">
        <form onSubmit={handleSubmit}>
        <div>
        <label htmlFor="username">Username</label>
        <input type="text"
        name="username"
        id="username"
        autoComplete="off"
         value={contact.username}
        onChange={handleInput}
        required
        />
         </div>
         <div>
        <label htmlFor="email">email</label>
        <input type="email"
        name="email"
        id="email"
        autoComplete="off"
         value={contact.email}
        onChange={handleInput}
        required
        />
     </div>
     <div>
     <label htmlFor="message">message</label>
        <textarea 
        name="message"
         id="message"
          cols="30" 
           autoComplete="off"
           value={contact.message}
           onChange={handleInput}
          rows="5">
          required
          </textarea>
        </div>

     
     <div>
     <button type="submit">submit</button>
     </div>

    
    </form>
    </section>
    </div>
     {/* Google Maps */}
        <section className="mb-3">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.5897176229287!2d73.1095086!3d19.08176830000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ea3ffbc9155d%3A0x99a3abd80b95fc47!2sGhot%20Rd%2C%20Taloja%2C%20Maharashtra%20410208!5e0!3m2!1sen!2sin!4v1756194559768!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}   // ✅ React style object
            allowFullScreen         // ✅ camelCase
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"  // ✅ camelCase
          ></iframe>
        </section>

    </section>
    </>
    )

};
