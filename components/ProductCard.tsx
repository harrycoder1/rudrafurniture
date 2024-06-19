"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { catagoryDataType, productDataType } from '@/types'
import { chooseRandomNumber } from '@/util'
// import ProductCard from './ProductCard'
import { MdAddShoppingCart } from 'react-icons/md'
import { AiOutlineSearch } from 'react-icons/ai'
import { FaRegHeart } from 'react-icons/fa'
import { FaExchangeAlt } from "react-icons/fa";
import { FaRupeeSign } from "react-icons/fa";
import Link from 'next/link'
import { SiteURL } from '@/util/url'
export default function ProductCard({data}:{data:productDataType}) {
  const dt = [
    "/img1.jpg" ,
    "/img2.jpg",
    "/img3.jpg"
  ]



  const [currentIndex, setCurrentIndex] = useState(0);
  
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

const onImageChange=(e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
  e.preventDefault()
  setCurrentIndex(prevIndex => (prevIndex + 1) % dt.length)
}
  return (
    <div className='m-2 pr-card-img h-p-card  h-flex'style={{flexDirection:"column" , height:"auto"}}>
      <div className='h-p-box'>
<div className="pr-card-img">
<Link href={`/shop/${data._id}`}  className='h-p-title'><img src={`${data.img[0]}`} alt="" style={{width:"100%" ,height:"100%" ,borderRadius: "0px"}} /> </Link>
</div>
<div className="h-p-cont">
    {/* ======for tempary take it name */}
    <h4 className='h-p-title'><Link href={`/shop/${data._id}`}  className='h-p-title'>{data.name}</Link> </h4>
    <div className="h-flex" style={{justifyContent:"end"}}>
    <span className="h-p-cate" style={{marginRight:"2px"}}>{data.category}</span>
    <span className="h-p-cate ">Available : {data.availability.toString()}</span>
    </div>
   <p className='h-p-descrip'> {data.description}</p>

  <div className="h-p-price h-flex" style={{justifyContent:"start"}}><FaRupeeSign className='' style={{fontSize:"21px"}} /> <span> {data.price.toString() }</span></div> 
</div>




</div>
</div>

  )
}
