
'use client';
import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaEnvelope } from 'react-icons/fa'

import Image from 'next/image'

export default function HomePage() {
  return(
    <div className='w-full h-full flex flex-col items-center'>
      <Image 
        src="/my-website/images/profile.jpg"
        alt="Profile picture"
        width={200}
        height={200}
        className='rounded-[50%]'
      ></Image>
      <h1 className='text-4xl m-4 font-bold'>Ethan Chen</h1>
      <p className='w-1/2'>I am an undergrad student majoring in Computer Science at Simon Fraser University. My expertise includes full stack development, database management, and container technologies. I am also familiar with machine learning concepts and have worked on several interesting projects related to LLMs.</p>
      <p>Click <a href='/my-website/about' className='text-blue-700 underline'>here</a> here to know more about me</p>
      <div className='w-1/3 flex justify-center'>
        <a href="https://github.com/YEEthanCC" className="mx-4 mt-4 flex items-center hover:text-blue-700">
          <FaGithub className='m-1' size={25} />
          Github
        </a>
        <a href="https://www.linkedin.com/in/chen-ethan-bb151b333/" className="mx-4 mt-4 flex items-center hover:text-blue-700">
          <FaLinkedin className='m-1' size={25} />
          Linkedin
        </a>
        <a className="mx-4 mt-4 flex items-center ">
          <FaEnvelope className='m-1' size={25} />
          yeethan59@gmail.com
        </a>
      </div>

    </div>
  )
}
