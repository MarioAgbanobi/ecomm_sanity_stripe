import React from 'react'
import Link from 'next/link'
import { urlFor } from '@/lib/client'


const Products = ({ product: { slug, image, name, price } }) => {
  return (
    <div>
      <Link href={`/product/${slug.current}`}>
         <div className="product-card">
          <img 
          src={urlFor(image && image[0])} 
          width={250}
          height={250}
          className='product-image'
          />
          <p className="producut-name">{name}</p>
          <p className="product-price">${price}</p>
         </div>
      </Link>
    </div>
  )
}

export default Products