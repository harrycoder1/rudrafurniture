import Image from "next/image";
import Contact from "./Contact";

export default function Slider() {
  return (
    <div>
<div className="row g-0">

<div className="col-md-8 myslider " >
<div id="carouselExampleControls" className="carousel slide position-sticky w-100 h-100"  data-bs-ride="carousel">
    <div className="carousel-inner" style={{width:"100%"}}>
      <div className="carousel-item active h-flex " >
        <Image width={900} height={500} src="/img1.jpg" className="d-block w-100  "  style={{width:"100%" ,height:"100%"  }}alt="..." />
        {/* <img  /> */}
      </div>
      <div className="carousel-item">
      <Image width={900} height={500} src="/img2.jpg" className="d-block w-100  "  style={{width:"100%" ,height:"100%" }}alt="..." />

      </div>
      <div className="carousel-item">
      <Image width={900} height={500} src="/img3.jpg" className="d-block w-100  "  style={{width:"100%" ,height:"100%" }}alt="..." />

      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
</div>
<div className="col-md-4 " style={{height:"500px"}}><Contact /></div></div>
    </div>
  )
}
