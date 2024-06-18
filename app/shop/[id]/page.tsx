"use client"
import { apiDataStatic } from '@/staticData'
import { productDataType } from '@/types'
import React ,{useEffect, useState} from 'react'
import { FaRupeeSign } from 'react-icons/fa'

export default function ProductByID({ params }: { params: { id: string } }) {
    const [data ,setData] = useState<productDataType | any>({})
    
    useEffect(() => {
        const fetchFunc = async()=>{
         const res  = await fetch(`https://r9211dra9211.vercel.app/api/product/${params.id}`)
         const data =await res.json()
         setData(data.data)
         console.log(data.data)
        }
        fetchFunc()
         }, [])
    
         const [currIndex , setCurrIndex] =useState(0)
  return (
<div className="" style={{marginTop:"85px"}}>
 {   data?.name ?
    <div className=' container'>
<div className="h-pv-card  row " style={{alignItems:"start"}}>
    <div className="h-pv-left row position-relative col-12  col-md-6" style={{}} >
        <div className="h-pv-prev-img d-none d-md-block col-md-2 ">
{data.img.map((d:String , i:any)=>(
   <button key={i} className={`border-0  m-2 ${currIndex==i?"shadow-lg":"shadow"} ${currIndex==i ?"h-pv-btn":""} `} onClick={()=>setCurrIndex(i)}><img src={`${d}`} className='' style={{width:"100%"}}/></button> 
))}

        </div>
        <div className="h-pv-img col-md-10 "> <img src={data.img[currIndex]} style={{width:"100%" , height:"100%"}} /></div>

        <div className="h-pv-prev-img d-block d-md-none col-12 col-md-0 ">
{data.img.map((d:String , i:any)=>(
   <button key={i} className={`border-0  m-2 ${currIndex==i?"shadow-lg":"shadow"} ${currIndex==i ?"h-pv-btn":""} `} onClick={()=>setCurrIndex(i)}><img src={`${d}`} className='' style={{width:"50px"}}/></button> 
))}

        </div>
    </div>



    {/* for content  */}
    <div className="h-pv-right col-12 col-md-6">
    <div className="h-p-cont">
    <h4 className='h-p-title'>{data.name}</h4>
    <div className="h-flex" style={{justifyContent:"end"}}>
    <span className="h-p-cate" style={{marginRight:"2px"}}>{data.category}</span>
    <span className="h-p-cate ">Available : {data.availability.toString()}</span>
    </div>
   <p className='h-p-descrip'> {data.description}</p>
<div className="h-p-price h-flex" style={{justifyContent:"start"}}><FaRupeeSign className='' style={{fontSize:"21px"}} /> <span> {data.price.toString() }</span></div> 

{/* for diensions */}


{/* for other data */}
{data?.other?.length >0 && <h5 className='mt-3'>More information:</h5> }

<table className="table table-borderless">
<tbody>
    
    
{data?.other.length >0 && data?.other.map((item:any,i:any)=>(
    <tr>
      {/* <th scope="row">1</th> */}
      <th>{item.label}</th>
      <td>{item.value}</td>
    </tr>

))}

</tbody>
</table>

{data?.dimensions?.length >0 && <h5 className='mt-3'>Dimensions:</h5> }

<table className="table table-borderless">
<tbody>
    
    

{data?.dimensions?.length >0 && data?.dimensions.map((item:any,i:any)=>(
    <tr>
      {/* <th scope="row">1</th> */}
      <th>{item.label}</th>
      <td>{item.value}</td>
    </tr>

))}

</tbody>
</table>
</div>

    </div>
</div>



    </div> 
    : <div className="" style={{marginTop:"72px"}}>Not found {params.id}</div>}

    </div>
  )
}
