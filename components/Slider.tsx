import Image from "next/image";
import Contact from "./Contact";
import SlideOffer from "./SlideOffer";
import Intro from "./Intro";

export default function Slider() {
  return (
    <div>
<div className="" style={{height:"100vh"}}>

<div className="myslider " >
<div id="carouselExampleControls" className="carousel slide w-100 h-100"  data-bs-ride="carousel">
    <div className="carousel-inner" style={{width:"100%"}}>
      <div className="carousel-item active h-flex " style={{height:"100vh" }}>
        <Image fill src="/img1.jpg" className="d-block w-100  "  style={{width:"100%" }}alt="..." />
        {/* <img  /> */}
      </div>
      <div className="carousel-item" style={{height:"100vh" }}>
      <Image  fill src="/img2.jpg" className="d-block w-100  "  style={{width:"100%"  }}alt="..." />

      </div>
      <div className="carousel-item" style={{height:"100vh" }}>
      <Image  fill src="/img3.jpg" className="d-block w-100  "  style={{width:"100%"  }}alt="..." />

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
</div>
    </div>
  )
}
