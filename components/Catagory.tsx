import React from 'react'
import CatagoryCard from './CatagoryCard'
import { furnitureCategories, furnitureData } from '@/staticData'

export default function Catagory() {
  return (
    <div>

      <div className="">
        <h2 className='syncopate-bold '><span className='text-gr'>|</span> Explore Our Collections...</h2>
      </div>
      <div className="h-flex">
      <div className=" row row-cols-1 row-cols-lg-3 row-cols-md-2  g-2">
        {furnitureData.map((d,i)=>(
          <div key={i} className="col "><CatagoryCard data={d} />
</div>
        ))}
      </div>
      </div>
    </div>
  )
}
