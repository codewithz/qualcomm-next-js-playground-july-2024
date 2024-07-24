"use client"

import React from 'react'
import { CldUploadWidget } from 'next-cloudinary'

export default function UploadPage() {
  return (
    <div>
      <CldUploadWidget uploadPreset='cwz_next_app_preset'>
        {({open})=>(
            <button 
            className='btn btn-primary'
            onClick={()=>open()}
            >
                Upload
            </button>
        )}
      </CldUploadWidget>
    </div>
  )
}
