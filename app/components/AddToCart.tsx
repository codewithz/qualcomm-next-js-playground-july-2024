'use client'
import React from 'react'

export default function AddToCart() {
  return (
    <div>
      <button onClick={()=> console.log("Add to Cart clicked")}>
        Add To Cart
      </button>
    </div>
  )
}
