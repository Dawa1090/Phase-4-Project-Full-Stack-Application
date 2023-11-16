
import React from 'react'

function HeroSection() {
  return (
    <>
      <div class="px-4 pt-5 my-5 text-center border-bottom">
    <h1 class="display-4 fw-bold text-body-emphasis">Centered screenshot</h1>
    <div class="col-lg-6 mx-auto">
      <p class="lead mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
      <div class="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
        <button type="button" class="btn btn-primary btn-lg px-4 me-sm-3">Plant Products</button>
        <button type="button" class="btn btn-outline-secondary btn-lg px-4">Plant Benifts</button>
      </div>
    </div>
    <div className="overflow-hidden" style={{ maxHeight: '100vh' }}>

      <div class="container px-5">
        <img src="https://cdn.shopify.com/s/files/1/0489/5922/6015/files/1_3_480x480.jpg?v=1640864075" class="img-fluid border rounded-3 shadow-lg mb-4" alt="Example image" width="700" height="500" loading="lazy"/>
      </div>
    </div>
  </div>
    </>
  )
}

export default HeroSection


