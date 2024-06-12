import Image from 'next/image'
import React from 'react'

export default function Intro() {
  return (
    <div className='' ><div className="slides slowFade "  style={{height:"250px"}}>
    <div className="slide ">
   <Image width={900} height={500} src="/img1.jpg" className="d-block w-100  "  style={{width:"100%" ,height:"100%"  }}alt="..." />

    </div>
    <div className="slide">
    <Image width={900} height={500} src="/img2.jpg" className="d-block w-100  "  style={{width:"100%" ,height:"100%"  }}alt="..." />

    </div>
    <div className="slide">
    <Image width={900} height={500} src="/img3.jpg" className="d-block w-100  "  style={{width:"100%" ,height:"100%"  }}alt="..." />

    </div>
    <div className="slide">
    <Image width={900} height={500} src="/img2.jpg" className="d-block w-100  "  style={{width:"100%" ,height:"100%"  }}alt="..." />

    </div>
</div></div>
  )
}
