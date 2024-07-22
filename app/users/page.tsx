import React from 'react'

interface User{
    id: number,
    name: string 
}

export default async function UsersPage() {

    const response=await fetch("https://jsonplaceholder.typicode.com/users",
        {
            cache:'no-store'
        }
    )
    const users: User[]=await response.json();

  return (
    <>
    <h1>Users</h1>
    <p>{new Date().toLocaleTimeString()}</p>
    <ul>
        {
            users.map(
                (user)=>(
                    <li key={user.id}>{user.name}</li>
                )
            )
        }
    </ul>
    </>
  )
}
