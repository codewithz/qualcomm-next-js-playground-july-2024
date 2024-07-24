"use client"

import React, { useState } from 'react'
import { CldUploadWidget,CldImage } from 'next-cloudinary'

interface CloudinaryResult{
    public_id:string;
}

export default function UploadPage() {
    const [publicId,setPublicId]=useState("");


  return (
    <div>
        {publicId && <CldImage src={publicId} width={270} height={270} alt="an image"/>}
      <CldUploadWidget 
      options={
        {
            sources:['local'],
            multiple:false
        }
      }
      uploadPreset='cwz_next_app_preset'
      onUpload={(result,widget)=>{
        console.log(result);
        if(result.event !== "success") return;
        const info=result.info as CloudinaryResult;
        setPublicId(info.public_id)
      }}
      >
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
