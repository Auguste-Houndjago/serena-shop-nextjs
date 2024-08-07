import AddToCart from '@/components/products/AddToCart'
import { convertDocToObj } from '@/lib/utils'
import productService from '@/lib/services/productService'
import Image from 'next/image'
import Link from 'next/link'
import { Rating } from '@/components/products/Rating'

import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';

import WhatsAppButton from '@/components/WhatsAppButton'

const Loading = dynamic(() => import('@/components/ui/Spinner'), {
  loading: () => <div>Loading...</div>, // Affichez une indication de chargement
});

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}) {
  const product = await productService.getBySlug(params.slug)
  if (!product) {
    return { title: 'Product not found' }
  }
  return {
    title: product.name,
    description: product.description,
  }
}

export default async function ProductDetails({
  params,
}: {
  params: { slug: string }
}) {
  const product = await productService.getBySlug(params.slug)
  if (!product) {
    return <div>Product not found</div>
  }
  return (
    <><div>
      
        <div className="flex justify-center ">
          <Link className='border border-indigo-200 px-1 rounded-sm' href="/"> 
              Produits
       </Link>
       
 
        </div>

        <Suspense fallback={<Loading/>} >
          <div className="flex space-x-4 justify-center gap mt-10  md:grid-cols-4 md:gap-3 relative">
          
            <div className="md:col-span-2 card-produit">
              <Image className='z-20 p-2 rounded-full imagP'
                src={product.image}
                alt={product.name}
                width={640}
                height={640}
                sizes="100vw"
                style={{
                  width: '400px',
                  height: 'auto',
                }}
              ></Image>
            </div>
            <div>
            </div>
            <div >
              <ul className="space-y-4">
                <li>
                  <h1 className="text-xl">{product.name}</h1>
                </li>
                <li>
                  <Rating
                    value={product.rating}
                    caption={`${product.numReviews} ratings`}
                  />
                </li>
                <li> {product.brand}</li>
                <li>
                  <div className="divider"></div>
                </li>
                <li>
                  Description: <p>{product.description}</p>
                </li>
              </ul>
            </div>
            <div>
              <div className="card  bg-base-300 shadow-xl mt-3 md:mt-0">
                <div className="card-body">
                  <div className="mb-2 flex justify-between">
                    <div>Price</div>
                    <div>{product.price}FCFA</div>
                  </div>
                  <div className="mb-2 flex justify-between">
                    <div>Status</div>
                    <div>
                      {product.countInStock > 0 ? 'In stock' : 'Unavailable'}
                    </div>
                  </div>
                  {product.countInStock !== 0 && (
                    <div className="card-actions justify-center">
                      <AddToCart
                        item={{
                          ...convertDocToObj(product),
                          qty: 0,
                          color: '',
                          size: '',
                        }}
                      />
                      <span className='flex gap-2 hover:cursor-pointer'>
                      <h2 className='h-4 py-2 font-bold text-xl' >contactez </h2><WhatsAppButton/>
                      </span>
                   
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Suspense>
    </div>
    </>
  )
}
