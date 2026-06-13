'use server'

import { redirect } from 'next/navigation'
import { getSession, addSessionProduct, removeSessionProduct } from '@/app/lib/session'
import { getSellerByUserId } from '@/app/lib/data'

const categoryTones: Record<string, string> = {
  Ceramics: 'from-[#7a4019] to-[#f3dec1]',
  Textiles: 'from-[#4a7c59] to-[#e8c99a]',
  Woodcraft: 'from-[#5b3521] to-[#c9813a]',
  Jewelry: 'from-[#b8722e] to-[#e8c99a]',
  Other: 'from-[#8d7c6b] to-[#f3dec1]',
}

export async function createProduct(formData: FormData) {
  const session = await getSession()
  if (!session) redirect('/login')

  const name = (formData.get('name') as string)?.trim()
  const category = formData.get('category') as string
  const description = (formData.get('description') as string)?.trim()
  const price = parseFloat(formData.get('price') as string)
  const quantity = parseInt(formData.get('quantity') as string) || 1
  const imageUrl = (formData.get('imageUrl') as string)?.trim()

  if (!name || !category || !price) return

  const seller = getSellerByUserId(session.userId)

  await addSessionProduct({
    id: `user-${Date.now()}`,
    name,
    category,
    description: description || '',
    price,
    quantity,
    imageUrl: imageUrl || undefined,
    sellerId: seller?.id ?? session.userId,
    sellerName: seller?.name ?? 'My Shop',
    tone: categoryTones[category] ?? categoryTones.Other,
    rating: 0,
    reviews: 0,
  })

  redirect('/dashboard?listed=true')
}

export async function deleteProduct(formData: FormData) {
  const session = await getSession()
  if (!session) redirect('/login')

  const id = formData.get('id') as string
  await removeSessionProduct(id)

  redirect('/dashboard?deleted=true')
}
