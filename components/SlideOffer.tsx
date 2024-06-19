"use client"
import { SiteUrl2 } from '@/util/url';
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

export default function SlideOffer({slidesData}:{slidesData:any}) {
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

const [sliderOffer , setSliderOffer] = useState<any>(slidesData)
// useEffect(() => {
// const fetData=async()=>{
// const res = await fetch(`${SiteUrl2}/api/offer`)
// const data = await  res.json() ;
// data.ok==true && setSliderOffer(data.data)
// }
// fetData()
// }, [])


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % sliderOffer.length);
    }, 4000);



    return () => clearInterval(interval);
  }, [sliderOffer.length]);
  const nextImg =()=>{
    setCurrentIndex(prevIndex => (prevIndex + 1) % sliderOffer.length);
  }
  return (
    <div className="my-5">

    
   

    

{sliderOffer.length >0 && sliderOffer?.map((d:any,i:any)=> (
 currentIndex==i &&   
 
 <div className=""  key={i} onClick={nextImg}>
 <div className='fade-out  fade-in-fwd  d-none d-md-block 'style={{width:"100%" , height:"180px" ,}} ><Image key={i} src={sliderOffer[currentIndex].img} fill alt='' className=' position-static rounded scale-in-center'  /></div>

 <div className='fade-out  fade-in-fwd  d-block d-md-none'style={{width:"100%" , height:"180px" ,}} ><Image key={i} src={sliderOffer[currentIndex].imgsmall} fill alt='' className=' position-static rounded scale-in-center'  /></div>

 </div>

))}

          </div>
        //  </div>


  )
}
