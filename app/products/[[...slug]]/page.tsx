import React from 'react'

interface Props{
    params:{
        slug:string[];
    }
}

export default function ProductPage(props:Props) {
  return (
    <div>
      Product Page : {props.params.slug}
    </div>
  )
}
