"use client" ;
import ProductCard from '@/components/ProductCard'
import { apiDataStatic } from '@/staticData'
import React ,{useEffect , useState} from 'react'

export default function Shop() {
  const [allData ,setAllData] =useState<any>([])
  useEffect(() => {
    const fetchFunc = async()=>{
     const res  = await fetch('https://r9211dra9211.vercel.app/api/product')
     const data =await res.json()
     setAllData(data.data)
    }
    fetchFunc()
     }, [])
  
  return (
    <div className="container">
      <div className="">

        
      </div>
    <div className='h-flex  ' style={{flexWrap:"wrap" ,margin:"72px" , alignItems:"start"}}>
        
       {allData?.map((dta:any , i:String)=>(
        <div key={`${i}`} className="m-3"><ProductCard data={dta} /></div>

       ))}
    </div></div>
  )
}
