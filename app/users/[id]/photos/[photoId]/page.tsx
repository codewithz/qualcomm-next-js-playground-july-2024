import React from 'react'

interface Props{
    params:{
        id:number;
        photoId:number;
    }
}

export default function PhotoPage({params : {id,photoId}}:Props) {
  return (
    <div>
        User ID:  {id}
        <br />
        Photo ID:  {photoId}
    </div>
  )
}
