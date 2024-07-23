import React from 'react'
import { notFound } from 'next/navigation';

interface Props{
    params:{
        id:number;
    }
}

export default function UserDetailsPage({params:{id}}:Props) {
  if(id>10) return notFound()
  
  return (
    <div>
      User Details Page : {id}
    </div>
  )
}
