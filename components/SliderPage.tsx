"use client"
import React, { useEffect, useState } from 'react'
import Slider from './Slider'
import { SiteUrl2 } from '@/util/url'

export default function SliderPage() {
    const [slider ,setSlider] = useState<any>([])
    // useEffect(() => {
    //     const fetData=async()=>{
    //     const res = await fetch(`${SiteUrl2}/api/slider`)
    //     const data = await  res.json() ;
    //     data.ok==true && setSlider(data.data)
    //     }
    //     fetData()
    //     }, [])
  return (
    <div><Slider slideData = {slider} /></div>
  )
}
