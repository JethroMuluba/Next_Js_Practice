"use client"

import { useRouter } from 'next/navigation'
import React from 'react'

export default function AboutMe() {

  const router = useRouter();
        
        const handleClick = () => {
          router.push("/contact_me")
        }

  return (
    <div className='flex flex-col gap-5 py-5 px-20 '>
        <h1 className='flex text-2xl text-white'>
            Know About Me Here
        </h1>

        <button onClick={handleClick} className='bg-amber-500 w-40 text-[#fff] font-bold rounded-md px-6 py-2 hover:bg-amber-600 active:border-2 active:rounded-md'>
          Contact Me
        </button>
    </div>
  )
}