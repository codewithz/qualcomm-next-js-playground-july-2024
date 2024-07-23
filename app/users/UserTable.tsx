import React from 'react'

interface User{
    id: number;
    name: string;
    email:string; 
}

export default async function UserTable() {

    
    const response=await fetch("https://jsonplaceholder.typicode.com/users",
        {
            cache:'no-store'
        }
    )
    const users: User[]=await response.json();

  return (
    <div>
       <p>{new Date().toLocaleTimeString()}</p>
    <table className="table table-bordered">
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
            </tr>
        </thead>
        <tbody>
            {
                users.map((user)=>(
                    <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                    </tr>
                ))
            }
        </tbody>
    </table>
    </div>
  )
}