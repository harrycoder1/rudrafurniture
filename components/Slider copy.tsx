
"use client"
import Image from "next/image";
import Contact from "./Contact";
import SlideOffer from "./SlideOffer";
import Intro from "./Intro";
import { useState ,useEffect } from "react";
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

<div className="myslider " >
<div id="" className=" w-100 h-100  hres"  data-bs-ride="carousel">
  {slider.length >0 ?
  <div className="">
  <div className=" d-none d-md-block" style={{width:"100%"}}>
  {slider.map((d:any , i:any)=>(
    <div key={i} className="carousel-item active h-flex hres "  >
    <Image fill src={slider[currIndex].img} className="d-block w-100   "  style={{width:"100%" ,  }}alt="..." />
    {/* <img  /> */}
  </div>

  ))}
    </div>
{/* FOr small device */}
    <div className="d-block d-md-none " style={{width:"100%"}}>
  {slider.map((d:any , i:any)=>(
    <div key={i} className=" h-flex hres "  >
    <Image fill src={slider[currIndex].imgsmall} className="d-block w-100   "  style={{width:"100%" ,  }}alt="..." />
    {/* <img  /> */}
  </div>

  ))}
    </div>
  </div>

  :
   <div className="carousel-inner" style={{width:"100%"}}>
   {sataicData.map((d , i)=>(
     <div key={i} className="carousel-item active h-flex hres "  >
     <Image fill src={d} className="d-block w-100   "  style={{width:"100%" ,  }}alt="..." />
     {/* <img  /> */}
   </div>
  
   ))}
    </div>

 
  
  
  }
   
    <button onClick={prevIndex} className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden" >Previous</span>
    </button>
    <button onClick={nextIndex} className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
</div>
</div>
    </div>
  )
}
