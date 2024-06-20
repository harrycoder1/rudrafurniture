
import '@/styles/about.css'
import Link from 'next/link'
export default function About() {
  return (
    <div><div className="about_us libre" style={{marginTop: "42px" ,    color:" #ff2c2c",textShadow: "0px 0px 2px #9e9e9e8c"}}>
    <div className="img">
      <img  src=" https://res.cloudinary.com/dgbd31kjz/image/upload/v1718857772/Home_Interior_Wooden_Design_Promotion_Instagram_Post_cydfba.png " />
    </div>
    <h2 className="heading">Welcome to Rudra Furniture</h2>
    <hr />
    <br /><br />
    <div className="content">
     <div className="story">
      <h2>Our Story</h2>
      <p>
        25 year of Experience with a passion for creating high-quality,
        handcrafted furniture. Our journey began from a small workspace with
        a team of skilled artisans dedicated to bringing unique and timeless
        designs to life.
      </p>
      </div>
      <div className="mission">
      <h2>Our Mission</h2>
      <p>
        We strive to provide our customers with furniture that combines
        functionality, durability, and aesthetic appeal. Our mission is to
        enhance the beauty and comfort of your home with pieces that reflect
        our commitment to excellence and craftsmanship.
      </p>
      </div>
    </div>
    <div className="contact-us">
      <h2 className="head">
        <Link className='head'style={{textDecoration:"none" ,color:" #ff2c2c",textShadow: "0px 0px 2px #9e9e9e8c"}} href ={"/#Contact"}>
        Contact us
        </Link>

      </h2>
      <hr />
      <p className="cont-para">
      If you have any inquiries or would like to learn more about Rudra Furniture, please Do not hesitate to reach out to us. We are here to assist you every step of the way.
      </p>
    </div>
    <div className="about-img">
      <img src="https://res.cloudinary.com/dgbd31kjz/image/upload/v1718874961/Picsart_23-03-24_22-46-10-515_mp73yz.png" alt="Rudra" />
      
    </div>
  </div></div>
  )
}
