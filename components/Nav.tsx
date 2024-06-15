import Image from 'next/image'
import { furnitureCategories as fr, navlinks, navlinks as nv } from "@/staticData"
import Link from 'next/link'
import CatagoryList from './CatagoryList'
export default function Nav() {
  return (
    <div className=" ">
      {/* for mobile and tabs 
=========Start here-======  */}
      <nav className="navbar d-block d-md-none bg-body-tertiary fixed-top ">
        <div className="container-fluid">
          <Link className="navbar-brand my-0" href="/">
            <Image src={"/logo.png"} width={150} height={60} alt='' />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="offcanvas offcanvas-end" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel"><span className='text-danger'>Rudra</span> <br />Furniture</h5>
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                
                
              {/* {navlinks.map((d, i) => (<li className='nav-item my-2'><Link className="  michroma text-gr   " key={i} href={d.link}>{d.label}</Link></li>))} */}


              <Link className="my-2 michroma text-gr  "   href={'/'}>Home</Link>
              <li className="my-2 outline-none border-0 michroma text-gr  " style={{cursor:"pointer"}} data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions"  >Catagories</li>
              <Link className="my-2 michroma text-gr  "  href={'/about'}>About</Link>
              </ul>
              <form className="h-flex  mt-3 mx-1" role="search">
              <input className="text-dark me-2  h-text-sm h-form-input-s  " type="search" placeholder="type here..."style={{fontSize:"12px" ,width:"auto"}} aria-label="Search" />
              <button className="h-btn" style={{fontSize:"12px" }}  type="submit">Search</button>
              </form>
            </div>
          </div>
        </div>
      </nav>
      {/* for mobile and tabs 
=========END -======  */}

      {/* For deskstop 
=====Start Here====== */}
      <nav className=" h-glass d-none fixed-top  d-md-block ">
        <div className="container">
          <div className="h-flex" style={{justifyContent:"space-between"}} >
            <div className="h-flex" style={{justifyContent:"space-around"}}>
            <div className=""><Link className="navbar-brand my-0" href="/">
              <Image src={"/logo.png"} width={150} height={60} alt='' />
            </Link>

            </div>
            <div className="">
            <form className="h-flex " role="search">
            <input className="text-dark me-2  h-text-sm h-form-input  " type="search" placeholder="type here..."style={{fontSize:"12px" ,width:"200px"}} aria-label="Search" />
            <button className="h-btn" style={{fontSize:"12px" }}  type="submit">Search</button>
              </form>
            </div>
            </div>
           
            <div className="">

              <Link className="mx-3 michroma text-gr  "   href={'/'}>Home</Link>
              <button className="mx-3 outline-none border-0 michroma text-gr  " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions"  >Catagories</button>
              <Link className="mx-3 michroma text-gr  "  href={'/about'}>About</Link>
            </div>
            
          </div>

{/* <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">Enable body scrolling</button> */}


        </div>
      </nav>
{/*=============== catagories sectio============== */}

{/* <button className="btn btn-primary">Enable both scrolling & backdrop</button> */}

<div className="offcanvas offcanvas-start" data-bs-scroll="true" tabIndex={-1} id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
  <div className="offcanvas-header">
    <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">Collections..</h5>
    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div className="offcanvas-body">
   <CatagoryList />
  </div>
</div>
    </div>
  )
}
