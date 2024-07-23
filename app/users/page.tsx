import React from 'react'
import UserTable from './UserTable'
import Link from 'next/link';

interface Props{
  searchParams:{
    sortOrder:string;
  }
}


export default function UsersPage({searchParams:{sortOrder}}:Props) {


  return (
    <>
    <h1>Users</h1>
    <Link href="/users/new" className='btn btn-neutral'>
    New User
    </Link>
    <UserTable sortOrder={sortOrder}/>
    </>
  )
}
