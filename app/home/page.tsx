'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

function page() {
    const router=useRouter()
  return (
    <main className="flex-1 bg-black min-h-screen px-10">
      <nav className="flex items-center justify-between py-5 ">
        <span>Twitter Test</span>
        <div className="flex items-center space-x-3">
          <Image 
            onClick={()=>router.replace('/')}
            alt="profile"
            src="/img/Punisher.jpeg"
            width={40}
            height={40}
            className="rounded-full"          
          />
          <span>Ghis8</span>
        </div>
      </nav>
    </main>
  )
}

export default page