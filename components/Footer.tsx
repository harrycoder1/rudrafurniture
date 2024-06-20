import Link from 'next/link'
import React from 'react'
import { FaHome } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { CiPhone } from "react-icons/ci";
import { IoLogoYoutube } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
export default function Footer() {

  const footerLinks = [
    {name:"Home" , link:"/"},
    {name:"Shop" , link:"/shop"},
    {name:"About" , link:"/"},
    {name:"Contact" , link:"/#contact"},
    {name:"Collections" , link:"/#collections"},
  ]
  const social = [
    {logo:<IoLogoYoutube /> , link:"/"},
    {logo:<FaInstagram /> , link:"/"},
    {logo:<FaFacebook /> , link:"/"}
  ]
  return (
    
    <div><footer className="text-center text-lg-start text-muted" style={{background:"#fecbcb40;"}}>
  <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
    
    <div className="me-5 d-none d-lg-block">
      <span>Stay Connected with Rudra Furniture on Social Media!</span>
    </div>
    
    <div>
      {social.map((d,i)=>(
 <Link key={i} href={d.link} className="me-4 text-reset">
  {d.logo}
</Link>
      ))}
     
      
    </div>
  </section>

  <section className="">
    <div className="container text-center text-md-start mt-5">
      <div className="row mt-3">
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          <h6 className="text-uppercase fw-bold mb-4">
           Rudra Furniture
          </h6>
          <p>
          Rudra Furniture is a premier furniture showcasing website where you can explore a wide range of furniture collections for various parts of your home. We provide detailed information and price ranges for each piece of furniture.
          </p>
        </div>

        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 className="text-uppercase fw-bold mb-4">
            Links
          </h6>
          {footerLinks.map((d,i )=>(
            <p key={i}>
            <Link  href={`${d.link}`} className="text-reset">{d.name}</Link>
          </p>
          ))}
        </div>

 

        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
          <p><i className="fas fa-home me-3"><FaHome /></i> Wathoda layout , Shreeram nagar  , Nagpur-440035 , Maharashtra</p>
          <p>
            <i className="fas fa-envelope me-3"> <BiLogoGmail /></i>
           rudrafurniture29@gmail.com
          </p>
          <p><i className="fas fa-phone me-3"> <CiPhone /></i>91+ 9146515502</p>
          <p><i className="fas fa-phone me-3"> <CiPhone /></i>91+ 9579023680</p>
        </div>
      </div>
    </div>
  </section>

  <div className="text-center p-4 bg-dark text-white" style={{backgroundColor: "rgba(0, 0, 0, 0.05)"}}>
  © 2024 Rudra Furniture. All rights reserved.
  </div>
</footer>
    <div />
    </div>
  
  )
}
