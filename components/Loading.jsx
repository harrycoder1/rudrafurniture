"use client"
import DataContext from '@/context/data/DataContext'
import Image from 'next/image'
import React, { useContext } from 'react'

// const a="sdsa".
export default function Loading({name}) {

  const dd = useContext(DataContext)
  return (
    <div className="relative" style={{width:"100%" , height:100%}}>

<div className='fixed z-[50] top-0 bottom-0 left-0 right-0 inset-0 bg glass_black flex justify-center items-center'>
<div className="flex flex-col justify-center items-center h-[100vh] w-[100vh]">
<Image src={'/setting.svg'} width={60} height={60} className='w-[100px] h-[100px]' alt='loading...' />
<div className="text-red-400 text-[32px] font-semibold">{dd.load.msg}...</div>
</div>
</div>

    </div>
  )
}
