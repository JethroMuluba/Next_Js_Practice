"use client"

import { useEffect, useState } from "react";

async function getData() {
  const res = await fetch('http://localhost:3000/backgrounds')


  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}



export default async function Home() {
  const data = await getData()
  // console.log(data[0].bgHdrHheroTitle);

  return (
    <div className="max-w-full ">
      <main className="flex min-h-screen flex-col  justify-between p-5">
        <div className=" py-5 px-20">
          


          <h2> je suis main</h2>
      
          
        </div>

      </main>
    </div>

  );
}
