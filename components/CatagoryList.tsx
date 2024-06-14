import { furnitureCategories } from '@/staticData'
import React from 'react'

export default function CatagoryList() {
  return (
    <div><div className="accordion accordion-flush libre" id="accordionFlushExample">
{furnitureCategories.map((d,i)=>(
 <div className="accordion-item" key={i}>
 <h2 className="accordion-header  ">
   <button className="accordion-button collapsed  mycata" style={{background:"white"}}  type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapseOne`+i} aria-expanded="false" aria-controls={`flush-collapseOne`+i} 
   
   
   
   >
     {d.category}
   </button>
 </h2>
 <div id={`flush-collapseOne`+i} className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
   <div className="accordion-body">

   <ul className="list-group list-group-flush">
    {/* for maping the catagory item */}
    {d.items.map((item,i)=>(
  <li className="list-group-item  list-group-item-action" key={i}>{item}</li>

    ))}

  
</ul>

   </div>
 </div>
</div>
))}

   


   
  </div></div>
  )
}
