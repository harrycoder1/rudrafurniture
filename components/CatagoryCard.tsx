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

    const randomTime=[7986, 6199, 7695, 6984, 5358, 6734, 7131, 6078, 9880, 7344, 6394, 7364, 6135, 5885, 8814, 7419, 5567, 9190, 8872, 8145, 7120, 6048, 7568, 6647, 5897, 7657, 9348, 9348, 9021, 9334, 7171, 6036, 7709, 6198, 8579, 6686, 8912, 5756, 6946, 5859]
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
 <div className='fade-in-bck  h-card-img rounded  ' onClick={onImageChange} style={{width:"100%" ,}} >
  
   {/* <Image key={i} fill src={`${d.img}`} className="  position-static rounded "   alt="..." /> */}
  <img  src={`${d.img}`} alt="" className="  position-static rounded "  style={{width:"100%" }}/>
   
   </div>
   <div className="text-center libre mb-2" style={{color:"#686868" , fontSize:"14px"}}><span className='fw-bold' > {data.category} </span>- {d.label}</div></div>
))

}    
    
        </div>
       
    </div>
  )
}
