
import { getServerSession } from "next-auth/next";
import Image from "next/image";
import Link from "next/link";
import { authOptions } from "./lib/auth";
import { redirect } from "next/navigation";


export default async function App() {
  const session=await getServerSession(authOptions)
  
  if(session){
    // console.log("session",session)
    redirect("/home")
  }
  return (
    <div className='h-screen flex items-center justify-center bg-black p-5'>
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
              className="w-3/4 border border-gray-400 text-center rounded-2xl py-3 mt-10"
            >
               <Link href="/api/auth/signin">Sign Up With Twitter</Link>
            </button>
           
        </div>
      </div>
    
    </div>
    
  );
}
