"use client"

import Link from "next/link";
import { useRouter } from "next/router";

async function getData() {
  const res = await fetch('http://localhost:3000/backgrounds')


  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}



export default async function Home() {
  const data = await getData();


  return (
    <div className="max-w-full ">
      <main className="flex min-h-screen flex-col  justify-between ">
        <div  className="max-w-full h-[600px] flex justify-between items-center bg-cover bg-center px-20" style={{ backgroundImage: `url(${data[0].bgHdrHhero})` }} >

        <Link href= '/contact_me'>
            <button className='bg-amber-500 w-40 text-[#fff] font-bold rounded-md px-6 py-2 hover:bg-amber-600 active:border-2 active:rounded-md'>
              Contact Me
              </button>
        </Link>

          <img className="size-[600px] " src={data[0].bgProfil} alt={data[0].bgProfilTitle} />
        </div>

      </main>
    </div> 

  );
}
