'use client'
import { redirect } from 'next/navigation'

export default function ProjectCard({imageURL, title, description, linkToProject}: {imageURL: string, title: string, description: string, linkToProject: string}) {
    
    return (
        <div className="grid grid-cols-2 w-3/4 h-[150px]" onClick={() => {redirect(linkToProject)}}>
            <div className='col-start-1 col-span-1 h-full overflow-hidden'>
                <img src={imageURL} className="w-full"></img>
            </div>
            <div className="h-full bg-gray-200 p-4">
                <h1 className="text-lg font-bold">{title}</h1>
                <p>{description}</p>
            </div>
        </div>
    )
}