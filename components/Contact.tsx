
export default function Contact() {
  return (
 <div  className="container  position-relative mt-5 libre "style={{height:"fit-content" }} >
  <img src="/bg.jpg" className="bgimg "style={{ zIndex:-1,width:"100%" ,height:"100%" , opacity:0.3}} alt="" />
    <div className="mt-3">
      <h1 className="my-4 pt-3 text-center fw-bolder libre h-heading" >Contact <span className="text-gr">US</span> </h1>
      <form action="" className="h-flex" style={{flexDirection:"column" }} >
      <input type="text"  className="h-form-input" placeholder="Enter name" required/>
      <input type="text"  className="h-form-input" placeholder="Phone Number" required/>
      <input type="email"  className="h-form-input" placeholder="Email" required/>
      <textarea    className="h-form-input" placeholder="Message" style={{height:"90px"}} required/>

      <button className=" h-green-glass h-btn mb-4" style={{width:"120px"}} >Send</button>



      </form>
    </div>
  </div>
  )
}
