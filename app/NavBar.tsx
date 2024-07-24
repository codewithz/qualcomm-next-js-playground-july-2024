"use client"

import Link from 'next/link'
import React from 'react'
import { useSession } from 'next-auth/react'

export default function NavBar() {

  const {status,data:session}=useSession()
  return (
    <div className='flex bg-slate-200 p-5 space-x-3'>
        <Link href="/" className='mr-5'>
        Next.JS
        </Link>
        <Link href="/users" className='mr-5'>
        Users
        </Link>
        <Link href="/admin">Admin</Link>
        {status === 'authenticated' && <div>{session.user!.name}</div> }
        {status === 'unauthenticated' && 
        <Link href="/api/auth/signin">Login</Link>}
      
    </div>
  )
}
