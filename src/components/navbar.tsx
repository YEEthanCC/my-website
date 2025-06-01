'use client';
import Link from 'next/link'

export default function Navbar() {
  return (
    <div className="w-full flex">
        <div className='w-3/5 m-4'>Ethan&apos;s Blogs</div>
        <Link href="/about" className="m-4">About me</Link>
        <Link href="/projects" className="m-4">My works</Link>
        <Link href="/contact" className="m-4">Contacts</Link>
    </div>
  );
}
