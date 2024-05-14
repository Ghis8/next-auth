import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function HomePage() {
    return (
        <div className="flex-1 bg-black min-h-screen px-10">
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
        </div>
      )
}

export default HomePage