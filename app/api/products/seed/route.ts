import data from '@/lib/data'
import dbConnect from '@/lib/dbConnect'
import ProductModel from '@/lib/models/ProductModel'
import UserModel from '@/lib/models/UserModel'
import { NextRequest, NextResponse } from 'next/server'

export const GET = async (request: NextRequest) => {
  const { users, products } = data
  try {
    await dbConnect()

    // Users
    await UserModel.deleteMany()
    await UserModel.insertMany(users)

    // Products
    await ProductModel.deleteMany()
    
    // Insertion des produits avec gestion des doublons
    const insertPromises = products.map(async (product) => {
      try {
        await ProductModel.findOneAndUpdate(
          { slug: product.slug },
          product,
          { upsert: true, new: true, runValidators: true }
        )
      } catch (error:any) {
        if (error.code === 11000) {
          console.warn(`Produit avec le slug "${product.name}" existe déjà. Mise à jour effectuée.`)
        } else {
          console.error(`Erreur lors de l'insertion/mise à jour du produit ${product.name}:`, error)
        }
      }
    })

    await Promise.all(insertPromises)

    return NextResponse.json({
      message: 'Seeded successfully',
      users: users.length,
      products: products.length,
    })
  } catch (error:any) {
    console.error('Erreur lors du seeding:', error)
    return NextResponse.json(
      { message: 'Seeding failed', error: error.message },
      { status: 500 }
    )
  }
}