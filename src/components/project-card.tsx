'use client'
import { redirect } from 'next/navigation'

export default function ProjectCard({imageURL, title, description, linkToProject}: {imageURL: string, title: string, description: string, linkToProject: string}) {
    
    return (
        <div className="grid grid-cols-2 w-3/4 h-[50px]" onClick={() => {redirect(linkToProject)}}>
            <img src={imageURL} className="h-full p-4 "></img>
            <div className="h-full p-4 bg-gray-200">
                <h1 className="text-xl font-bold">{title}</h1>
                <p>{description}</p>
            </div>
        </div>
    )
}