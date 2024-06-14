"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { catagoryDataType } from '@/types'
import { chooseRandomNumber } from '@/util'

export default function CatagoryCard({data}:{data:catagoryDataType}) {
  const dt = [
    "/img1.jpg" ,
    "/img2.jpg",
    "/img3.jpg"
  ]



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
  let interval :any;

  const setRandomInterval = () => {

    const randomTime=[ 14717, 17884, 15757, 13140, 19941, 18027, 18648, 13861, 13630, 13218, 18982, 15634, 16034, 16064, 16810, 17845, 19181, 16524, 13204, 18359, 18015, 19865, 17153, 17846, 15819, 13098, 17131, 18507, 14707, 19429, 16242, 16124, 18035, 17372, 13996, 17147, 15266, 13529, 14625, 14057 ]
    const randomIndex = Math.floor(Math.random() * randomTime.length);
    const randomTime1 = randomTime[randomIndex] // Random time between 1000ms and 6000ms (1-6 seconds)
    interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % dt.length);
      clearInterval(interval);
      setRandomInterval(); // Set a new interval with a different random time
    }, randomTime1);
  };

  setRandomInterval(); // Start the initial interval

  return () => clearInterval(interval); // Cleanup on component unmount
}, [dt.length]);

const onImageChange=(e:React.MouseEvent<HTMLDivElement, MouseEvent>)=>{
  e.preventDefault()
  setCurrentIndex(prevIndex => (prevIndex + 1) % dt.length)
}
  return (
    <div className='h-card h-flex'style={{flexDirection:"column"}}>
        <div className=" ">
        {data.items.map((d,i)=> (
 currentIndex==i &&   
 <div className="" key={i}>
 <div className='  h-card-img rounded  ' onClick={onImageChange} style={{width:"100%" ,}} >
  
   {/* <Image key={i} fill src={`${d.img}`} className="  position-static rounded "   alt="..." /> */}
  <img width={500}  src={`${d.img}`} alt="" className="  position-static rounded "  style={{width:"100%" }}/>
   
   </div>
   <div className="text-center libre mb-2" style={{color:"#686868" , fontSize:"18px"}}><span className='fw-bold' > {data.category} </span>- {d.label}</div></div>
))

}    
    
        </div>
       
    </div>
  )
}
