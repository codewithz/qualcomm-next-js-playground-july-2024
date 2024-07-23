"use client"

import { useRouter } from 'next/navigation'
import React from 'react'

export default function NewUserPage() {

  const router=useRouter()
  return (
    <div>
      <h1>New User Home Page</h1>
      <button
      className='btn btn-accent'
      onClick={()=>router.push("/users")}
      >
        Create
      </button>
    </div>
  )
}
