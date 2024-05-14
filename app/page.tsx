'use client'

import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function App() {
  const router=useRouter()
  const {data:session}=useSession()
  return (
    <main className='h-screen flex items-center justify-center bg-black p-5'>
      <div className="flex items-center justify-center gap-40 p-16">
          <Image 
            src="/img/logo.jpg"
            alt='logo'
            width={100}
            height={100}
          />
        <div className='flex-col'>
            <h1 className='text-3xl font-bold'>Happening now</h1>
            <span>Join today.</span>
            <button
              onClick={()=>router.push('home')}
             className="w-3/4 border border-gray-400 text-center rounded-2xl py-3 mt-10">Sign Up With Twitter</button>
        </div>
      </div>
    
</main>
  );
}
