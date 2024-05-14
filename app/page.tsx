
import { getServerSession } from "next-auth/next";
import Image from "next/image";
import Link from "next/link";
import { authOptions } from "./api/auth/[...nextauth]/route";


export default async function App() {
  const session=await getServerSession(authOptions)
  
  if(session){
    // console.log("session",session)
    return (
      <main className="flex-1 bg-black min-h-screen px-10">
        <nav className="flex items-center justify-between py-5 ">
          <span>Twitter Test</span>
          <div className="flex items-center space-x-3">
            <Image 
              alt="profile"
              src={"/img/Punisher.jpeg"}
              width={40}
              height={40}
              className="rounded-full"          
            />
            <span>Ghis8</span>
          </div>
        </nav>
        <button
          className='px-5 py-3 bg-blue-500 rounded-lg flex items-center justify-center mt-16'
        >
          <Link href='/api/auth/signout'>Sign Out</Link>
        </button>
      </main>
    )
  }
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
              className="w-3/4 border border-gray-400 text-center rounded-2xl py-3 mt-10"
            >
               <Link href="/api/auth/signin">Sign Up With Twitter</Link>
            </button>
           
        </div>
      </div>
    
    </main>
    
  );
}
