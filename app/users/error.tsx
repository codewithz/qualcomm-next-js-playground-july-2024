"use client"

import React from 'react'

interface Props{
    error:Error;
    reset: ()=>void;
}

export default function UsersErrorPage({error,reset}:Props) {
    console.log(error)
  return (
    <div>
      An unexpected error occured while loading users
      <br />
      <button className='btn btn-error' onClick={()=> reset()}>
        Retry

      </button>
    </div>
  )
}
