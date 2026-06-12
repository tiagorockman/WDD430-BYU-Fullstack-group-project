'use server'

import { redirect } from 'next/navigation'
import { getSession } from '@/app/lib/session'

export async function deleteProduct(formData: FormData) {
  const session = await getSession()
  if (!session) redirect('/login')

  // TODO: delete from database using formData.get('id')
  const id = formData.get('id') as string
  console.log('Delete product:', id)

  redirect('/dashboard?deleted=true')
}
