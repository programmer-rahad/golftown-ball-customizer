import React from 'react'
import Sidebar from '../Sidebar/Sidebar';
import Products from '../Products/Products.js' 

function StepOne({events,products}) {

  return <div>
    <div className="container">
      <div className="row">
        <div className="col-lg-3">
          <Sidebar />
        </div>
        <div className="col-lg-9">
          <Products events={events} products={products} />
        </div>
      </div>
    </div>
  </div>

}

export default StepOne