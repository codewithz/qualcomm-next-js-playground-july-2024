import React from 'react'

interface Props{
    params:{
        id:number;
    }
}

export default function UserDetailsPage(props:Props) {
  return (
    <div>
      User Details Page : {props.params.id}
    </div>
  )
}
