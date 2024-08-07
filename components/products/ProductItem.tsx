import { Product } from '@/lib/models/ProductModel'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Rating } from './Rating'
import WhatsAppButton from '../WhatsAppButton'

export default function ProductItem({ product }: { product: Product }) {
  return (
    <div className="card bg-base-300 shadow-xl mb-4">
      <figure>
        <Link href={`/product/${product.slug}`} className='cardProduct'>
          <Image 
            src={product.image}
            alt={product.name}
            width={300}
            height={300}
            className="object-cover h-64 w-full"
          />
        </Link>
      </figure>
      <div className="card-body">
        <Link className='border-2 border-blue-800 rounded-md' href={`/product/${product.slug}`}>
          <h2 className="card-title text-center flex justify-center font-normal">{product.name}</h2>
        </Link>
        <Rating value={product.rating} caption={`(${product.numReviews})`} />
        <p className="mb-2">{product.brand}</p>
        <div className="card-actions flex items-center space-x-2">
          <span className="text-2xl">{product.price} FCFA</span>
          <span className='bg-transparent'> <WhatsAppButton /> </span>
        </div>
      </div>
    </div>
  )
}
