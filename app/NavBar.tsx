import Link from 'next/link'
import React from 'react'

export default function NavBar() {
  return (
    <div className='flex bg-slate-200 p-5 space-x-3'>
        <Link href="/" className='mr-5'>
        Next.JS
        </Link>
        <Link href="/users" className='mr-5'>
        Users
        </Link>
        <Link href="/admin">Admin</Link>
        <Link href="/api/auth/signin">Login</Link>
      
    </div>
  )
}
