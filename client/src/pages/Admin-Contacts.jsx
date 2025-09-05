import { useState, useEffect } from "react";
import {useAuth} from "../store/auth";
export const AdminContacts=()=>{
        const [contactData,setContactData]=useState([]);
      const {authorizationToken}=useAuth();
    const getContactsData=async()=>{
      
        try{
            const response= await fetch("http://localhost:5000/api/admin/contacts",
                {

                    method:"GET",
                    headers:{
                        authorization:authorizationToken,

                    },
                }
            );
            const data=await response.json();
            console.log("contact data",data);
            if(response.ok)
            {
                setContactData(data);
            }

        }
        catch(error)
        {
          console.log(error);  
        }
    }

    
    useEffect(()=>
        {getContactsData();

        },[])

    return( <>
        <section className="container admin-users">
         <h1>Admin Contact Data</h1>
         <div className="container admin-user">
          {contactData.map((curContactData,index)=>{
            const {username,email,message}=curContactData;
        return (
        <div key={index}>
        <p>{username}</p>
        <p>{email}</p>
        <p>{message}</p>
        <butto className="btn">delete</butto>
        </div>
        )
        })};
         </div>
   
    </section>
    </>
)
}