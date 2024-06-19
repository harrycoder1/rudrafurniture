"use client" ;
import ProductCard from '@/components/ProductCard'
import { apiDataStatic, furnitureData } from '@/staticData'
import Image from 'next/image';
import React ,{useEffect , useState} from 'react'
import { useSearchParams } from "next/navigation";

export default function Shop() {
  const [allData ,setAllData] =useState<any>([])
  const [filterData ,setFilterData] = useState<any>([])
  useEffect(() => {

    const fetchFunc = async()=>{
     const res  = await fetch('https://r9211dra9211.vercel.app/api/product')
     const data =await res.json()
     setAllData(data.data)
     setFilterData(data.data)
    }
    fetchFunc()
     }, [])
  
     const [filtPara , setFiltPara] = useState({searchText:"" , category:"" , minPrice:0 , maxPrice:100000})

     const handleChangeText =(e:any)=>{
e.preventDefault() ; 
      setFiltPara(pre =>({...pre , [e.target.name]:e.target.value}))
      let filt = allData.filter((d:any) => d.name.toLowerCase().includes(e.target.value.toLowerCase()) )
      setFilterData(filt)
     }
     const handleChangeCategory =(e:any) =>{
      e.preventDefault() ; 
      setFiltPara(pre =>({...pre , [e.target.name]:e.target.value , minPrice:0 , maxPrice:100000}))
      
      let filt = allData.filter((d:any) => d.category.toLowerCase() === e.target.value.toLowerCase()  )
      setFilterData(filt)
    }
     const handleMinPrice =(e:any)=>{
      let filt ;
setFiltPara(pre =>({...pre , [e.target.name]:e.target.value}))
if( filtPara.category !=="" ){
  let filt1 = allData.filter((d:any) => d.category.toLowerCase() === filtPara.category.toLowerCase())

   filt = filt1.filter((d:any) => d.price >e.target.value  )
   setFilterData(filt)
   return
 }
 filt = allData.filter((d:any) => d.price >e.target.value  )
   setFilterData(filt)
     }

     const handleMaxPrice =(e:any)=>{
      let filt ;
      setFiltPara(pre =>({...pre , [e.target.name]:e.target.value}))
     if( filtPara.category !=="" ){
      let filt1 = allData.filter((d:any) => d.category.toLowerCase() === filtPara.category.toLowerCase())

       filt = filt1.filter((d:any) => d.price <e.target.value  )
       setFilterData(filt)
       return
     }
     filt = allData.filter((d:any) => d.price <e.target.value  )
     setFilterData(filt)

     }
     


     const handleReset =()=>{
      setFilterData(allData)
     }

    //  for recieve category
     const searchParam = useSearchParams();
     const category = searchParam.get("category");
     useEffect(() => {
const changeCate =()=>{
  setFiltPara(pre =>({...pre , category:`${category}`}))
  let filt = allData.filter((d:any) => d.category.toLowerCase() === category?.toLowerCase()  )
  setFilterData(filt)
  console.log("Im runing bRO")
}
allData.length>0 && category!=null && changeCate()
     }, [allData])
     
  return (
    <div className="container">
<div className=" " style={{marginTop:"72px"}}>
  <div className="">
    <input className="text-dark me-2  h-text-sm h-form-input  " onChange={handleChangeText} name="searchText" type="search" placeholder="type here..."style={{fontSize:"12px" ,width:"100%"}} aria-label="Search" />  
 </div>
<div className="h-flex" style={{flexWrap:"wrap"}}>
  <button className='text-dark me-2  h-text-sm h-form-input ' onClick={handleReset}>All </button>
  <select name="category" value={filtPara.category} onChange={handleChangeCategory} className='text-dark me-2  h-text-sm h-form-input' id="cars">
  <option  value={""} className='text-center'>{"Select Category"}</option>
    
    {furnitureData.map((itm , i)=>(
      <option key={i} value={`${itm.category}`} className='text-center'>{itm.category}</option>
    ))}
    
    
  </select>

  <input type="number" onChange={handleMinPrice} className="text-dark me-2  h-text-sm h-form-input  " value={filtPara.minPrice} name="minPrice"  placeholder="Minimum Price"style={{fontSize:"12px" ,width:"100px"}}  />  
  <input type="number" onChange={handleMaxPrice} className="text-dark me-2  h-text-sm h-form-input  " value={filtPara.maxPrice} name="maxPrice"  placeholder="Maximum Price "style={{fontSize:"12px" ,width:"100px"}}  />  
  </div>
</div>

     {allData?.length >0 ?    <div className='h-flex  ' style={{flexWrap:"wrap"  , alignItems:"start"}}>
      
        
        {filterData.length >0 ? filterData?.map((dta:any , i:String)=>(
         <div key={`${i}`} className="m-3"><ProductCard data={dta} /></div>
 
        ))
      
      : <>
      <div className="h-flex">
        <h3 className='text-black'>Not Available !</h3>
      </div>
      </>
      
      }
 
 
     </div>
     :
     <div className="w-100 h-flex" style={{marginTop:"72px" ,height:"40vh" , alignItems:"center"}} >
      
      <Image src={'/loading.svg'} width={60} height={60} className='100px]' alt='loading...' />
            <div className="text-danger"> Loading...</div>
            
            </div>
     
     }
 
    
    

    </div>
  )
}
