"use client"
import { getDayFromDateTime } from "@/util"
import { useState } from "react"

export default function Contact() {
  
  const[contactData , setContactData] = useState({name:"" ,phone:"" , email:"" , message:""})

 const  handleOnChanege =(e:any) =>{
setContactData(pre =>({...pre , [e.target.name]:e.target.value}))
 }
const [isSend , setIsSend]  = useState(false)


// for send the message of contact us form
 const handleSubmit=async(e:any) =>{
e.preventDefault() ;
setIsSend(true)
const url  = process.env.NEXT_PUBLIC_TELEGRAM_URL ;
console.log(url)
const today = getDayFromDateTime()
try{
  const msg = `Hello Rudra Furniture, %0A New Client Found at  ${today} %0A Name: ${contactData.name}  %0A Email: ${contactData.email} %0A Phone: ${contactData.phone}  %0A Message: ${contactData.message}`
  
   const url2 = `${url}&text=${msg}&parse_mode=html`
  
  let headersList = {
      "Accept": "*/*",
    
     }
     
     let response = await fetch(url2, { 
       method: "GET",
       headers: headersList
     });
     
     let data2 = await response.json();
  //    // // console.log(data2);
  data2.ok ==true && setContactData({name:"" , email:"" , message:"", phone:""})
  data2.ok ? alert("Message Send SuccessFully") :alert("Server Error")
  }finally{
setIsSend(false)
}
 }
  return (


 <div id="Contact" className="container  position-relative mt-5 libre " style={{height:"fit-content" ,bottom:0 , left:0 , right:0 }} >
  <img src="/bg.jpg" className="bgimg "style={{ zIndex:-1,width:"100%" ,height:"100%" , opacity:0.3}} alt="" />
    <div className="mt-3">
      <h1 className="my-4 pt-3 text-center fw-bolder libre h-heading" >Contact <span className="text-gr">US</span> </h1>
      <form onSubmit={handleSubmit} className="h-flex" style={{flexDirection:"column" }} >
      <input type="text" name="name" onChange={handleOnChanege}  value={contactData.name} className="h-form-input" placeholder="Enter name" required/>
      <input type="text" name="phone" onChange={handleOnChanege}  value={contactData.phone} className="h-form-input" placeholder="Phone Number" required/>
      <input type="email"  name="email" onChange={handleOnChanege} value={contactData.email} className="h-form-input" placeholder="Email" required/>
      <textarea  name="message" onChange={handleOnChanege} value={contactData.message}   className="h-form-input" placeholder="Message" style={{height:"90px"}} required/>

      <button className=" h-green-glass h-btn mb-4" style={{width:"120px"}}  >{isSend?"Sending...":"Send"}</button>



      </form>
    </div>
  </div>
  )
}
