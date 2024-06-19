// import { Header } from '@/components'
// import Image from 'next/image'
import { Catagory, Contact, FAQ, Footer, SlideOffer, Slider } from "@/components"
export default function Home() {
  return (
    <main className="">
     
<Slider />
<div className="container " >
  <SlideOffer />
<Catagory />
<Contact />
<FAQ />

</div>
{/* <img src="https://res.cloudinary.com/dsepeslgc/image/upload/v1718299549/rudraFurniture-akshay/Bathroom%20Furniture/Medicine_Cabinets_kjdkli.png" alt="not found" /> */}
    </main>
  )
}
