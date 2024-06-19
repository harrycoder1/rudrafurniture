"use client" ;
// import ProductCard from '@/components/ProductCard'
import ProductCard from '@/components/ProductCard';
import ProductCardSamall from '@/components/ProductCardSmall';
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
<div className=" " style={{marginTop:"80px"}}>
  <div className=" h-flex">
    <input className="text-dark me-2  h-text-sm h-p-form-input  " onChange={handleChangeText} name="searchText" type="search" placeholder="type here..."style={{fontSize:"12px" ,width:""}} aria-label="Search" />  
    <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample12" aria-expanded="false" aria-controls="collapseExample12">
   Add Filters
  </button>


 </div>
 <div className="collapse" id="collapseExample12">
  <div className="card ">
  <div className="h-flex" style={{flexWrap:"wrap"}}>
  <button className='text-dark   h-text-sm h-p-form-input ' onClick={handleReset}>Remove Filter </button>
  <select name="category" value={filtPara.category} onChange={handleChangeCategory} className='text-dark  h-text-sm h-p-form-input' id="cars">
  <option  value={""} className='text-center'>{"Select Category"}</option>
    
    {furnitureData.map((itm , i)=>(
      <option key={i} value={`${itm.category}`} className='text-center'>{itm.category}</option>
    ))}
    
    
  </select>
  <div className="h-flex" style={{flexWrap:"wrap"}} >
<div className='text-center' style={{color: "gray"}}>Select Price Range</div>
<div className="h-flex" style={{flexWrap:"wrap"}}>
  <input type="number" onChange={handleMinPrice} className="text-dark me-2  h-text-sm h-p-form-input  " value={filtPara.minPrice} name="minPrice"  placeholder="Minimum Price"style={{fontSize:"12px" ,width:"100px"}}  />  
  <input type="number" onChange={handleMaxPrice} className="text-dark me-2  h-text-sm h-p-form-input  " value={filtPara.maxPrice} name="maxPrice"  placeholder="Maximum Price "style={{fontSize:"12px" ,width:"100px"}}  />  </div></div>
  </div>
  </div>
</div>

</div>

     {allData?.length >0 ?    <div className='h-flex  h-resp-box ' style={{flexWrap:"wrap"  , alignItems:"start"}}>
      
        
        {filterData.length >0 ? filterData?.map((dta:any , i:String)=>(
         <div key={`${i}`} className=""> 

         <div className="slide-large"><ProductCard data={dta} /></div>
         <div className="slide-small"><ProductCardSamall data={dta} /></div>

         </div>
 
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
