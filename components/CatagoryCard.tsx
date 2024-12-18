"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { catagoryDataType } from '@/types'
import { chooseRandomNumber } from '@/util'
// import ProductCard from './ProductCard'
import { MdAddShoppingCart } from 'react-icons/md'
import { AiOutlineSearch } from 'react-icons/ai'
import { FaRegHeart } from 'react-icons/fa'
import { FaExchangeAlt } from "react-icons/fa";
import Link from 'next/link'
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

const onImageChange=(e:any)=>{
  e.preventDefault()
  setCurrentIndex(prevIndex => (prevIndex + 1) % dt.length)
}
  return (
    <div className='h-card  h-flex'style={{flexDirection:"column"}}>
     
       

{/* for new card */}

        <div className=''>
{/* <div className="col-md-3 col-sm-6"> */}
{data.items.map((d,i)=> (
 currentIndex==i &&
 <div className="" style={{margin:"12px"}} key={i}>
 <div className=' fade-out fade-in-fwd rounded  '  style={{}} >



        <div className="product-grid " onClick={onImageChange}>
            <div className="product-image ">
                <div className="">
                <img width={500}  src={`${d.img}`} alt="" className="   position-static rounded "  style={{width:"100%" }}/> 
                </div>
               
                <div className="h-namelabel shadow-md fw-bold text-center " style={{zIndex:2 , top:0 , right:0 , left:0 ,  position: "absolute" ,    background: "#cfcfcf7a"}}>{d.label}</div>
                <div className="price  shadow-sm "><Link href={{pathname: "/shop",query: {category: `${data.category}`}}} style={{textDecoration:"none" , }} className='text-white  h-shopbtn '  >shop now</Link></div>




            </div>
            <div className="product-content">
                <h3 className="title"><div >{data.category}</div></h3>
               
            </div>
        </div>


    </div>
    </div>
    



))

}    
</div>
</div>

  )
}
