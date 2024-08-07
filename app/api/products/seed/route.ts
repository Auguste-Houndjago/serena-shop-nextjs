import data from '@/lib/data'
import dbConnect from '@/lib/dbConnect'
import ProductModel from '@/lib/models/ProductModel'
import UserModel from '@/lib/models/UserModel'
import { NextRequest, NextResponse } from 'next/server'

export const GET = async (request: NextRequest) => {
  const { users, products } = data
  try {
    await dbConnect()

    // Insertion des utilisateurs avec gestion des doublons
    const insertUserPromises = users.map(async (user) => {
      try {
        await UserModel.findOneAndUpdate(
          { email: user.email }, // Utilisez un champ unique tel que l'email pour identifier l'utilisateur
          user,
          { upsert: true, new: true, runValidators: true }
        )
      } catch (error:any) {
        console.error(`Erreur lors de l'insertion/mise à jour de l'utilisateur ${user.email}:`, error)
      }
    })

    await Promise.all(insertUserPromises)

    // Insertion des produits avec gestion des doublons
    const insertProductPromises = products.map(async (product) => {
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

    await Promise.all(insertProductPromises)

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
