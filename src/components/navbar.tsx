'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [path, setPath] = useState('/')
  return (
    <div className="grid grid-cols-4 w-full">
        <div className='col-start-1 col-span-1 flex justify-end'>
          <Link href="/" className="text-2xl my-4 me-4 ms-8 font-bold" onClick={() => setPath('/')}>Ethan Chen</Link>
        </div>
        <div className='col-start-3 col-span-2 flex justify-center'>
          {path == 'about' && <Link href="/about" className="p-4 text-black underline underline-offset-8" onClick={() => setPath('about')}>About me</Link>}
          {path != 'about' && <Link href="/about" className="p-4 text-gray-700/50 hover:text-black hover:underline underline-offset-8" onClick={() => setPath('about')}>About me</Link>}
          {path == 'projects' && <Link href="/projects" className="p-4 text-black underline underline-offset-8" onClick={() => setPath('projects')}>My works</Link>}
          {path != 'projects' && <Link href="/projects" className="p-4 text-gray-700/50 hover:text-black hover:underline underline-offset-8" onClick={() => setPath('projects')}>My works</Link>}
          {path == 'resume' && <Link href="/resume" className="mr-4 p-4 text-black underline underline-offset-8" onClick={() => setPath('resume')}>Resume</Link>}
          {path != 'resume' && <Link href="/resume" className="mr-4 p-4 text-gray-700/50 hover:text-black hover:underline underline-offset-8" onClick={() => setPath('resume')}>Resume</Link>}
        </div> 
    </div>
  )
}