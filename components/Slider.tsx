"use client"
import Image from "next/image";
import Contact from "./Contact";
import SlideOffer from "./SlideOffer";
import Intro from "./Intro";
import { useEffect, useState } from "react";
import { SiteUrl2 } from "@/util/url";

export default function Slider() {
  const [slider , setSlider] = useState<any>([])
  useEffect(() => {
  const fetData=async()=>{
  const res = await fetch(`${SiteUrl2}/api/slider`)
  const data = await  res.json() ;
  data.ok==true && setSlider(data.data)
  }
  fetData()
  }, [])
  
  const sataicData = ["/img1.jpg" , "/img2.jpg" ,"/img3.jpg"]
  const [currIndex ,setCurrIndex] = useState(0)
  const prevIndex = () =>{
    let curr = currIndex <=0 ? currIndex -1 : slider.length -1
    setSlider(curr)
  }
  
  const nextIndex = () =>{
    let curr = currIndex == slider.length -1 ? 0 : currIndex+1
    setSlider(curr)
  }


  return (
    <div>
<div className="" >
{slider.length ==0  ?

<div className="myslider " >
<div id="carouselExampleControls3" className="carousel slide w-100 h-100  hres"  data-bs-ride="carousel">
    <div className="carousel-inner" style={{width:"100%"}}>

      {sataicData.length >0 && sataicData?.map((d:any , i:any)=>(
 <div key={i} className={`carousel-item  h-flex hres `} >
 <Image fill src={d} className="d-block w-100   "  style={{width:"100%" ,  }}alt="..." />
 {/* <img  /> */}
</div>
      ))}
     

      
    </div>

    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls3" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls3" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
</div>

:
// for small screen
<div className="myslider " >
{/* <div id="carouselExampleControls" className="carousel d-block d-md-none  slide w-100 h-100  hres"  data-bs-ride="carousel">
    <div className="carousel-inner" style={{width:"100%"}}>

      {slider.length >0 && slider?.map((d:any , i:any)=>(
 <div key={i} className={`carousel-item    h-flex hres `} >
 <Image fill src={d.imgsmall} className="d-block w-100   "  style={{width:"100%" ,  }}alt="..." />

</div>
      ))}
     

      
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next </span>
    </button>
  </div> */}


  {/* for large screen */}
  <div id="hellocontrol" className="carousel d-none d-md-block slide w-100 h-100  hres"  data-bs-ride="carousel">
    <div className="carousel-inner" style={{width:"100%"}}>

      {slider.length >0 && slider?.map((d:any , i:any)=>(
 <div key={i} className={`carousel-item ${currIndex ==i ? "active":""}   h-flex hres `} >
 <Image fill src={d.img} className="d-block w-100   "  style={{width:"100%" ,  }}alt="..." />
 {/* <img  /> */}
</div>
      ))}
     

      
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#hellocontrol" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#hellocontrol" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>

</div>}

</div>
    </div>
  )
}
