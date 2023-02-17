import React from 'react';
import './Products.scss';
import Product from './Product';  

function Products({products,events}) {
  return (
    <div className="row py-4 my-2">
        {
          products.map(product => {
            return <Product events={events} {...product} key={product.id} />
          })
        }
    </div>
  )
}

export default Products