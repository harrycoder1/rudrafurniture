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

    const randomTime=[
      8531, 10145, 11228, 9276, 6901, 7056, 10949, 7111, 11765, 11562,
      8497, 9732, 11856, 10321, 7421, 8748, 5384, 5953, 11795, 8210,
      5783, 10367, 7481, 11196, 10884, 11484, 6447, 10040, 10653, 8911,
      9420, 10397, 7176, 11220, 10744, 5145, 9071, 11682, 11630, 7033,
      6778, 5896, 5277, 7875, 10467, 7154, 7582, 11791, 9564, 11839
    ]
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
 <div className=' fade-out fade-in-fwd rounded position-relative  ' onClick={onImageChange} style={{width:"100%" ,}} >
   
  <img width={500}  src={`${d.img}`} alt="" className="  h-card-img position-static rounded "  style={{width:"100%" }}/>
   
   </div>
   <div className="text-center libre mb-2 h-cat-text" style={{color:"#686868" }}><span className='fw-bold' > {data.category} </span>- {d.label}</div></div> 
   
   




))

}    
    
        </div>
       
    </div>
  )
}
