import React from 'react'
import { BiLoaderCircle } from "react-icons/bi";


export default function Loading() {
  return (
    <div className='flex items-center justify-center h-screen'>
        <span className='text-amber-500 text-4xl animate-spin'>
            <BiLoaderCircle />
        </span>
    </div>
  )
}
