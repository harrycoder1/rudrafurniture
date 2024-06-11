
export default function Contact() {
  return (
    <div className="my-5">
      <h3 className="fw-bolder h-text-dark text-center my-5 ">Contact Me! </h3>
      <div className="form-floating mb-3 mx-5">
    <input type="text" className="form-control float-center  " id="floatingInput" placeholder="jhon" />
    <label htmlFor="floatingInput " className="h-hover-red">Full Name</label>
  </div>
  
  <div className="form-floating mb-3 mx-5">
    <input type="email" className="form-control float-center  " id="floatingInput" placeholder="jhon@gmail.com" />
    <label htmlFor="floatingInput " className="h-hover-red">Enter Email</label>
  </div>

  <div className="form-floating  mb-3 mx-5">
  <textarea className="form-control" placeholder="Leave your Message" id="floatingTextarea"></textarea>
  <label htmlFor="floatingTextarea">Message</label>
</div>
  <div className="h-flex mt-5">
  <button className=" btn btn-outline-danger border-2 p-3 px-4"> Send</button>

  </div>
  
  
  </div>
  )
}
