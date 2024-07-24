import Image from 'next/image'
import Link from 'next/link'
import ProductCard from './components/ProductCard'
import { getServerSession } from 'next-auth'
import { authOptions } from './api/auth/authOptions'

export default async function Home() {

  const session=await getServerSession(authOptions);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1>Welcome &nbsp;
          {session && <span>{session.user!.name}</span>}</h1>
          <h3>to Qualcomm Next JS Training</h3>
          <img src="https://logos-world.net/wp-content/uploads/2022/11/Qualcomm-Emblem.png" width={200} height={200}/>
        <Link href="/users">Users</Link>
        <ProductCard />
      </div>
    </main>
  )
}
