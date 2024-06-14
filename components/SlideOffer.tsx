"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

export default function SlideOffer() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides=[
    {
label:"1o%",
imgs:"/offer/img1.jpg"
  },
  {
    label:"1o%",
    imgs:"/offer/img2.jpg"
      }
      ,
      {
        label:"1o%",
        imgs:"/offer/img3.jpg"
          }
  
]
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % slides.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [slides.length]);
  return (
    <div className="my-5">

    
   

    

{slides.map((d,i)=> (
 currentIndex==i &&   <div className='fade-out fade-in-fwd'style={{width:"100%" , height:"180px" ,}} ><Image key={i} src={d.imgs} fill alt='' className=' position-static rounded scale-in-center'  /></div>
))}

          </div>
        //  </div>


  )
}
