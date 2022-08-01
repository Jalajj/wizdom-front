import React from 'react'

function TempFooter() {
  return (
    <div>
    {/* <!-- Footer --> */}
    <footer
            className="text-center text-lg-start text-white"
            style={{backgroundColor: "#3C4862"}}
            >
      {/* <!-- Grid container --> */}
      <div className="container p-4 pb-0">
        {/* <!-- Section: Links --> */}
        <section className="">
          {/* <!--Grid row--> */}
          <div className="row">
            {/* <!-- Grid column --> */}
            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold" style={{textAlign:'left'}}>
               Wizdom QA.
              </h6>
              <p style={{textAlign:'left'}}>
                Here you can use rows and columns to organize your footer
                content. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit.
              </p>
            </div>
            {/* <!-- Grid column --> */}
  
            <hr className="w-100 clearfix d-md-none" />
  
            {/* <!-- Grid column --> */}
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3 mr-4">
              <h6 className="text-uppercase mb-4 font-weight-bold" style={{textAlign:'left'}}>Products</h6>
              <p>
                <a className="text-white" style={{textAlign:'left', textDecoration:'none'}}>MDBootstrap</a>
              </p>
              <p>
                <a className="text-white" style={{textAlign:'left', textDecoration:'none'}}>MDWordPress</a>
              </p>
              <p>
                <a className="text-white" style={{textAlign:'left', textDecoration:'none'}}>BrandFlow</a>
              </p>
              <p>
                <a className="text-white" style={{textAlign:'left', textDecoration:'none'}}>Bootstrap Angular</a>
              </p>
            </div>
            {/* <!-- Grid column --> */}
  
            <hr className="w-100 clearfix d-md-none" />
  
            {/* <!-- Grid column --> */}
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3 mr-4">
              <h6 className="text-uppercase mb-4 font-weight-bold" style={{textAlign:'left'}}>
                Useful links
              </h6>
              <p>
                <a className="text-white" style={{textAlign:'left', textDecoration:'none'}}>Your Account</a>
              </p>
              <p>
                <a className="text-white" style={{textAlign:'left', textDecoration:'none'}}>Become an Affiliate</a>
              </p>
              <p>
                <a className="text-white" style={{textAlign:'left', textDecoration:'none'}}>Shipping Rates</a>
              </p>
              <p>
                <a className="text-white" style={{textAlign:'left', textDecoration:'none'}}>Help</a>
              </p>
            </div>
  
            {/* <!-- Grid column --> */}
            <hr className="w-100 clearfix d-md-none" />
  
            {/* <!-- Grid column --> */}
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3 mr-4">
              <h6 className="text-uppercase mb-4 font-weight-bold" style={{textAlign:'left'}}>Contact</h6>
              <p style={{textAlign:'left'}}><i className="fas fa-home mr-3"></i> New York, NY 10012, US</p>
              <p style={{textAlign:'left'}}><i className="fas fa-envelope mr-3"></i> info@gmail.com</p>
              <p style={{textAlign:'left'}}><i className="fas fa-phone mr-3"></i> + 01 234 567 88</p>
              <p style={{textAlign:'left'}}><i className="fas fa-print mr-3"></i> + 01 234 567 89</p>
            </div>
            {/* <!-- Grid column --> */}
          </div>
          {/* <!--Grid row--> */}
        </section>
        {/* <!-- Section: Links --> */}
  
        <hr className="my-3" />
  
        {/* <!-- Section: Copyright --> */}
        <section className="p-3 pt-0">
          <div className="row d-flex align-items-center">
            {/* <!-- Grid column --> */}
            <div className="col-md-7 col-lg-8 text-center text-md-start">
              {/* <!-- Copyright --> */}
              <div className="p-3">
                © {new Date().getFullYear()} Copyright:
               WizdomQA.
              </div>
              {/* <!-- Copyright --> */}
            </div>
            {/* <!-- Grid column --> */}
  
            {/* <!-- Grid column --> */}
            <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
              {/* <!-- Facebook --> */}
              <a
                 className="btn btn-outline-light btn-floating m-1 text-white"
                
                 role="button"
                 ><i className="fab fa-facebook-f"></i
                ></a>
  
              {/* <!-- Twitter --> */}
              <a
                 className="btn btn-outline-light btn-floating m-1  text-white"
                
                 role="button"
                 ><i className="fab fa-twitter"></i
                ></a>
  
              {/* <!-- Google --> */}
              <a
                 className="btn btn-outline-light btn-floating m-1  text-white"
                
                 role="button"
                 ><i className="fab fa-google"></i
                ></a>
  
              {/* <!-- Instagram --> */}
              <a
                 className="btn btn-outline-light btn-floating m-1  text-white"
                
                 role="button"
                 ><i className="fab fa-instagram"></i
                ></a>
            </div>
           
          </div>
        </section>
       
      </div>
      
    </footer>
   
  </div>
  
  )
}

export default TempFooter