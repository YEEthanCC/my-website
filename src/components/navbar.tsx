'use client';
import Link from 'next/link'
import { useState } from 'react';

export default function Navbar() {
  const [path, setPath] = useState('about')
  return (
    <div className="w-full flex">
        <div className='w-3/5 flex '>
          <Link href="/about" className="my-4 me-4 ms-8" onClick={() => setPath('about')}>Ethan&apos;s Blogs</Link>
        </div>
        <div className='w-2/5 flex justify-end'>
          {path == 'about' && <Link href="/about" className="p-4 text-black shadow-md" onClick={() => setPath('about')}>About me</Link>}
          {path != 'about' && <Link href="/about" className="p-4 text-gray-700/50 hover:text-black hover:shadow-md" onClick={() => setPath('about')}>About me</Link>}
          {path == 'projects' && <Link href="/projects" className="p-4 text-black shadow-md" onClick={() => setPath('projects')}>My works</Link>}
          {path != 'projects' && <Link href="/projects" className="p-4 text-gray-700/50 hover:text-black hover:shadow-md" onClick={() => setPath('projects')}>My works</Link>}
          {path == 'contact' && <Link href="/contact" className="mr-4 p-4 text-black shadow-md" onClick={() => setPath('contact')}>Contacts</Link>}
          {path != 'contact' && <Link href="/contact" className="mr-6 p-4 text-gray-700/50 hover:text-black hover:shadow-md" onClick={() => setPath('contact')}>Contacts</Link>}
        </div> 
    </div>
  )
}