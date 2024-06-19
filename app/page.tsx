// "use client"
// import { Header } from '@/components'
// import Image from 'next/image'
import { Catagory, Contact, FAQ, Footer, SlideOffer, Slider, SliderOfferPage } from "@/components"
import SliderPage from "@/components/SliderPage"
export default function Home() {
  return (
    <main className="">
     
<SliderPage />
<div className="container " >
  <SliderOfferPage />
<Catagory />
<Contact />
<FAQ />

</div>
{/* <img src="https://res.cloudinary.com/dsepeslgc/image/upload/v1718299549/rudraFurniture-akshay/Bathroom%20Furniture/Medicine_Cabinets_kjdkli.png" alt="not found" /> */}
    </main>
  )
}
