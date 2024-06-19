"use client"
import Image from "next/image";
import Contact from "./Contact";
import SlideOffer from "./SlideOffer";
import Intro from "./Intro";
import { useEffect, useState } from "react";
import { SiteUrl2 } from "@/util/url";

export default function Slider({slideData}:{slideData:any}) {
  const [slider , setSlider] = useState<any>([])

  
  const sataticData = ["/img1.jpg" , "/img2.jpg" ,"/img3.jpg"]
  const [currIndex ,setCurrIndex] = useState(0)
  const [isLeft , setIsLeft] = useState<Boolean>(true)
  const [staticIndex ,setStaticIndex] = useState<any>(0)
  useEffect(() => {
    const fetData=async()=>{
    const res = await fetch(`${SiteUrl2}/api/slider`)
    const data = await  res.json() ;
    data.ok==true && setSlider(data.data)
    }
    fetData()
    }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrIndex(prevIndex => (prevIndex + 1) % slider.length);
    }, 4000);



    return () => clearInterval(interval);
  }, [slider.length]);


  const prevIndex = () =>{
    let curr =Math.abs( (currIndex-1) % slider.length)
    console.log(curr)
setCurrIndex(curr)
setIsLeft(false)
    // setSlider(curr)
  }
  
  const nextIndex = () =>{
    let curr = (currIndex+1 )% slider.length
    console.log(curr)
setCurrIndex(curr)
setIsLeft(true)
    // setSlider(curr)
  }

const staticNext =()=>{
  let curr = (staticIndex+1 )% sataticData.length
  setStaticIndex(curr)
  setIsLeft(true)
}
const staticPrev = () =>{
  let curr =Math.abs( (staticIndex-1) % sataticData.length)
  console.log(curr)
setStaticIndex(curr)
setIsLeft(false)
  // setSlider(curr)
}
  return (
    <div>
<div className="" >
{slider.length ==0  ?

<div className="myslider " >
<div id="carouselExampleControls3" className="  w-100 h-100  hres"  data-bs-ride="carousel">
    <div className="" style={{width:"100%"}}>
    {sataticData.length >0 && sataticData?.map((d:any , i:any)=>(
        currIndex === i &&
 <div key={i} className={`  h-flex hres ${isLeft ?"slide-in-left" :"slide-in-right"}`} >
 <Image fill src={sataticData[staticIndex]} className="d-block w-100   "  style={{width:"100%" ,  }}alt="..." />
 {/* <img  /> */}
</div>
      ))}
     
     

      
    </div>

    <button onClick={staticPrev} className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls3" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button onClick={staticNext} className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls3" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
</div>

:
// for small screen
<div className="myslider " >
<div id="carouselExampleControls" className="carousel slide-small  slide w-100 h-100  hres"  data-bs-ride="carousel">
<div>
      {slider.length >0 && slider?.map((d:any , i:any)=>(
        currIndex === i &&
 <div key={i} className={`  h-flex hres ${isLeft ?"slide-in-left" :"slide-in-right"}`} >
 <Image fill src={slider[currIndex].imgsmall} className="d-block w-100   "  style={{width:"100%" ,  }}alt="..." />
 {/* <img  /> */}
</div>
      ))}
     

      
    </div>
    <button onClick={prevIndex} className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls1" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button onClick={nextIndex} className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls1" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>


  {/* for large screen */}
  <div id="carouselExampleControls1" className=" w-100 h-100  slide-large  hres"  data-bs-ride="carousel">
   <div>
      {slider.length >0 && slider?.map((d:any , i:any)=>(
        currIndex === i &&
 <div key={i} className={`  h-flex hres ${isLeft ?"slide-in-left" :"slide-in-right"}`} >
 <Image fill src={slider[currIndex].img} className="d-block w-100   "  style={{width:"100%" ,  }}alt="..." />
 {/* <img  /> */}
</div>
      ))}
     

      
    </div>
    <button onClick={prevIndex} className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls1" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button onClick={nextIndex} className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls1" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>

</div>}

</div>
    </div>
  )
}
