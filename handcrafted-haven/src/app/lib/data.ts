export type Seller = {
  id: string
  userId: string
  name: string
  bio: string
  location: string
  specialty: string
  memberSince: string
  initials: string
  tone: string
}

export type Product = {
  id: string
  name: string
  sellerId: string
  sellerName: string
  price: number
  category: string
  description: string
  tone: string
  rating: number
  reviews: number
  quantity: number
  imageUrl?: string
}

export type Review = {
  id: string
  sellerId: string
  author: string
  rating: number
  comment: string
  date: string
  productName: string
}

export const sellers: Seller[] = [
  {
    id: '1',
    userId: '1',
    name: 'North Pine Studio',
    bio: 'We craft functional pieces from locally sourced hardwoods — each item shaped by hand in our small Vermont workshop. Every grain tells a story.',
    location: 'Burlington, Vermont',
    specialty: 'Woodcraft',
    memberSince: 'March 2023',
    initials: 'NP',
    tone: 'from-[#5b3521] to-[#c9813a]',
  },
  {
    id: '2',
    userId: '',
    name: 'Thread & Hearth',
    bio: 'Natural fibers, slow-loomed textiles. We weave heirloom-quality pieces designed to last a lifetime and become even more beautiful with use.',
    location: 'Asheville, North Carolina',
    specialty: 'Textiles',
    memberSince: 'January 2023',
    initials: 'TH',
    tone: 'from-[#4a7c59] to-[#e8c99a]',
  },
  {
    id: '3',
    userId: '',
    name: 'Mesa House',
    bio: 'Wheel-thrown stoneware inspired by the high desert. Each piece is fired in our wood kiln and glazed using minerals found in the Southwest.',
    location: 'Taos, New Mexico',
    specialty: 'Ceramics',
    memberSince: 'June 2022',
    initials: 'MH',
    tone: 'from-[#7a4019] to-[#f3dec1]',
  },
  {
    id: '4',
    userId: '',
    name: 'Forge & Bloom',
    bio: 'Metalsmith studio creating wearable art. We work with recycled precious metals and sustainably sourced stones to make pieces that carry meaning.',
    location: 'Portland, Oregon',
    specialty: 'Jewelry',
    memberSince: 'September 2022',
    initials: 'FB',
    tone: 'from-[#b8722e] to-[#e8c99a]',
  },
]

export const products: Product[] = [
  { id: '1', name: 'Walnut Pour-Over Set', sellerId: '1', sellerName: 'North Pine Studio', price: 64, category: 'Woodcraft', description: 'Carved stand, stoneware dripper, and hand-thrown mug.', tone: 'from-[#5b3521] to-[#c9813a]', rating: 4.9, reviews: 24, quantity: 3 },
  { id: '2', name: 'Sage Loom Throw', sellerId: '2', sellerName: 'Thread & Hearth', price: 92, category: 'Textiles', description: 'Hand-woven with organic sage-dyed wool, generously sized.', tone: 'from-[#4a7c59] to-[#e8c99a]', rating: 4.8, reviews: 18, quantity: 5 },
  { id: '3', name: 'Amber Clay Vase', sellerId: '3', sellerName: 'Mesa House', price: 48, category: 'Ceramics', description: 'Wheel-thrown stoneware with a natural amber glaze.', tone: 'from-[#7a4019] to-[#f3dec1]', rating: 4.7, reviews: 31, quantity: 7 },
  { id: '4', name: 'Copper Ring Set', sellerId: '4', sellerName: 'Forge & Bloom', price: 36, category: 'Jewelry', description: 'Hand-forged copper rings with natural textures.', tone: 'from-[#b8722e] to-[#e8c99a]', rating: 4.9, reviews: 42, quantity: 12 },
  { id: '5', name: 'Linen Table Runner', sellerId: '2', sellerName: 'Thread & Hearth', price: 55, category: 'Textiles', description: 'Natural linen with hand-stitched border details.', tone: 'from-[#8d7c6b] to-[#f3dec1]', rating: 4.6, reviews: 15, quantity: 8 },
  { id: '6', name: 'Cedar Serving Board', sellerId: '1', sellerName: 'North Pine Studio', price: 78, category: 'Woodcraft', description: 'Live-edge cedar board with hand-applied oil finish.', tone: 'from-[#5d3520] to-[#c9813a]', rating: 4.8, reviews: 27, quantity: 4 },
  { id: '7', name: 'Ocean Blue Mug', sellerId: '3', sellerName: 'Mesa House', price: 32, category: 'Ceramics', description: 'Wheel-thrown mug with a deep ocean-blue glaze.', tone: 'from-[#2b4c7e] to-[#7ab4d4]', rating: 4.7, reviews: 53, quantity: 15 },
  { id: '8', name: 'Gold Leaf Earrings', sellerId: '4', sellerName: 'Forge & Bloom', price: 45, category: 'Jewelry', description: 'Sterling silver with hammered gold-leaf accents.', tone: 'from-[#c9813a] to-[#f3dec1]', rating: 5.0, reviews: 19, quantity: 6 },
]

export const reviews: Review[] = [
  { id: '1', sellerId: '1', author: 'Margaret T.', rating: 5, comment: 'The pour-over set is absolutely stunning. The craftsmanship is impeccable and it makes my morning coffee feel like a ritual.', date: 'March 2024', productName: 'Walnut Pour-Over Set' },
  { id: '2', sellerId: '1', author: 'James K.', rating: 5, comment: 'Beautifully made cedar board. You can tell it was crafted with real care. Already getting compliments from everyone who visits.', date: 'February 2024', productName: 'Cedar Serving Board' },
  { id: '3', sellerId: '1', author: 'Sofia R.', rating: 4, comment: 'Fast shipping and excellent packaging. The wood grain on this board is just breathtaking. Worth every penny.', date: 'January 2024', productName: 'Cedar Serving Board' },
  { id: '4', sellerId: '2', author: 'Claire N.', rating: 5, comment: 'The throw is even more beautiful in person. Perfect weight for cool evenings.', date: 'March 2024', productName: 'Sage Loom Throw' },
  { id: '5', sellerId: '2', author: 'David W.', rating: 5, comment: 'The table runner added so much warmth to our dining room. The stitching is meticulous.', date: 'February 2024', productName: 'Linen Table Runner' },
  { id: '6', sellerId: '3', author: 'Thomas B.', rating: 5, comment: 'My favorite mug by far. The glaze has so much depth — different every time the light changes.', date: 'February 2024', productName: 'Ocean Blue Mug' },
  { id: '7', sellerId: '3', author: 'Priya S.', rating: 5, comment: 'The amber vase is exactly what I was looking for. It sits on my mantel and everyone asks about it.', date: 'January 2024', productName: 'Amber Clay Vase' },
  { id: '8', sellerId: '4', author: 'Ana M.', rating: 5, comment: 'These earrings are delicate and beautiful. The gold leaf detail is exquisite and very wearable.', date: 'March 2024', productName: 'Gold Leaf Earrings' },
  { id: '9', sellerId: '4', author: 'Lena F.', rating: 5, comment: 'Ordered the copper rings for my sister\'s birthday and she was overjoyed. The texture is incredible.', date: 'January 2024', productName: 'Copper Ring Set' },
]

export function getSellerById(id: string): Seller | undefined {
  return sellers.find((s) => s.id === id)
}

export function getSellerByUserId(userId: string): Seller | undefined {
  return sellers.find((s) => s.userId === userId)
}

export function getProductsBySeller(sellerId: string): Product[] {
  return products.filter((p) => p.sellerId === sellerId)
}

export function getReviewsBySeller(sellerId: string): Review[] {
  return reviews.filter((r) => r.sellerId === sellerId)
}

export function getSellerStats(sellerId: string) {
  const sellerProducts = getProductsBySeller(sellerId)
  const totalReviews = sellerProducts.reduce((sum, p) => sum + p.reviews, 0)
  const avgRating =
    sellerProducts.length > 0
      ? sellerProducts.reduce((sum, p) => sum + p.rating, 0) / sellerProducts.length
      : 0
  return {
    productCount: sellerProducts.length,
    totalReviews,
    avgRating: Math.round(avgRating * 10) / 10,
  }
}
