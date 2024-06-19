
"use client"
import { SiteUrl2 } from '@/util/url'
import React, { useEffect, useState } from 'react'
import SlideOffer from './SlideOffer'

export default function SliderOfferPage() {
    const [sliderOffer , setSliderOffer] = useState<any>([])
useEffect(() => {
const fetData=async()=>{
const res = await fetch(`${SiteUrl2}/api/offer`)
const data = await  res.json() ;
data.ok==true && setSliderOffer(data.data)
}
fetData()
}, [])
  return (
    <div>{sliderOffer.length >0 && <SlideOffer slidesData={sliderOffer} />} </div>
  )
}
