import  Image from 'next/image'
import { furnitureCategories as fr , navlinks  as nv } from "@/staticData"
export default function Nav() {
  return (
    <nav className="py-1 h-bgdark ">
      <div className="container">
<div className="row">
 {/* {fr.map((data , i)=>data.category)} */}
 <div className="col">
<div className="  h-flex h-w-fit  " >
  <div className="col h-flex h-w-fit">
  <Image width={150} height={150} src={'/logo.png'} alt='' className='img-fluid' style={{width:"65px" , height:"65px"}}/>

  </div>
  <div className=" col h-text-sm fw-lighter   h-text-mordern h-lineheight h-flex h-w-fit " >
    Rudra <br />
    Furniture
  </div>

</div>
</div>
<div className="col h-flex" style={{justifyContent:"end" , alignItems:"center"}}>
 {/* for menu */}
 <div className="dropdown d-md-none d-block">
  <button className="btn btn-secondary dropdown-toggle bg-transparent border-light" type="button" data-bs-toggle="dropdown" aria-expanded="false">
   M
  </button>
  <ul className="dropdown-menu h-bg-trans" style={{background:"hsla(208, 100%, 97%, 0.39)"}}>
    <li><a className="dropdown-item" href="#">Home</a></li>
    <li><a className="dropdown-item" href="#">Catagories</a></li>
    <li><a className="dropdown-item" href="#">About Us</a></li>
  </ul>
</div>

{/* end */}
<div className="d-none d-md-block">
<ul className="row  "> 
{nv.map((data, i )=> <li className='h-text-sm h-navlink col  ' style={{fontSize:"14px"}}  key={i} > {data.label}</li>)}
</ul>
 </div>
 </div>
 </div>
 </div>

    </nav>
  )
}
