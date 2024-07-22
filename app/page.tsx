import Image from 'next/image'
import Link from 'next/link'
import ProductCard from './components/ProductCard'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1>Welcome to Qualcomm Next JS Training</h1>
        <Link href="/users">Users</Link>
        <ProductCard />
      </div>
    </main>
  )
}
