import { faq } from '@/staticData'
import React from 'react'

export default function FAQ() {
  return (
    <div>
    <section className="bsb-faq-3 py-3 py-md-5 py-xl-8">
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
            <h2 className="mb-4 display-5 text-center libre h-heading fw-bolder">Frequently Asked <span className='text-gr'>Questions</span> </h2>
            
            {/* <hr className="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle" /> */}
          </div>
        </div>
      </div>
    
      <div className="mb-8">
        <div className="">
          <div className="row justify-content-center">
            {/* <div className="col-11 col-xl-10">
              <div className="d-flex align-items-end mb-5">
                <i className="bi bi-person-gear me-3 lh-1 display-5"></i>
                <h3 className="m-0">Your Account</h3>
              </div>
            </div> */}
            <div className="col-11 col-xl-10 libre" style={{fontSize:"18px"}}>
              <div className="accordion accordion-flush" id="faqAccount">

                
{faq.map((d,i) =>(
    <div key={i} className="accordion-item bg-transparent border-top border-bottom py-3">
    <h2 className="accordion-header" id={`faqAccountHeading`+i}>
      <button className="accordion-button collapsed bg-transparent fw-bold shadow-none text-gr" type="button" data-bs-toggle="collapse" data-bs-target={`#faqAccountCollapse`+i} aria-expanded="false" aria-controls={`faqAccountCollapse`+i} style={{fontSize:"16px"}}>
        {d.question}
      </button>
    </h2>
    <div id={`faqAccountCollapse`+i} className="accordion-collapse collapse" aria-labelledby={`faqAccountHeading`+i}>
      <div className="accordion-body">
        <p>{d.answer}</p>
      </div>
    </div>
  </div>
))}
                
            




              
              </div>
            </div>
          </div>
        </div>
      </div>
    
     
      
    
    </section></div>
  )
}
