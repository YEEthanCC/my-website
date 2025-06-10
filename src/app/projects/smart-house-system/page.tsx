'use client'
import { FaGithub } from 'react-icons/fa'
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";
import { useState } from 'react';

export default function SmartHouseSystemPage() {
    const imageLinks =[
        "/my-website/images/smart-house-system/1.png", 
        "/my-website/images/smart-house-system/2.png",
        "/my-website/images/smart-house-system/3.png",
    ]
    const [image, setImage] = useState(0)

    return (
        <div className="grid grid-cols-6 w-full">
            <div className='col-start-2 col-span-2 flex justify-center p-4 items-center'>
                <SlArrowLeft className='hover:text-blue-700 mr-1' onClick={() => setImage((image + imageLinks.length - 1) % imageLinks.length)} />
                <img
                    src={imageLinks[image]}
                    alt="Profile picture"
                    className='w-96'
                ></img>
                <SlArrowRight className='hover:text-blue-700 ml-1' onClick={() => setImage((image + 1) % imageLinks.length)} />
            </div>
            <div className='col-start-4 col-span-2 p-4'>
                <h1 className="text-2xl font-bold">AI Smart House System</h1>
                <a href="https://github.com/YEEthanCC/webduino-smart-house-control" className="mt-4 flex items-center hover:text-blue-700"><FaGithub className='m-1' size={25} /> Github</a>
                <p className="mt-2">GenAI powered smart house system that accomodated the needs of everyday household</p>
                <h2 className="text-xl mt-4">Tech Stacks</h2>
                <p className="mt-1">Express, REST API, Javascript, Docker, Kubernetes, OpenAPI</p>
            </div>
            <div className='col-start-2 col-span-4'>
                <h2 className="text-xl">Project Overview</h2>
                <ul className="list-disc list-outside m-4">
                    <li>Designed a model AI-powered smart house system by integrating the company's LLM app development platform with Webduino-Blocky (a JavaScript-based microcontroller programming platform) serving as a foundational blueprint for future intelligent automation products aimed at enhancing daily living through accessible and adaptive technology</li>
                    <li>Modified the source code of Webduino Blocky into a Node.js server to enable controlling embedded hardware and peripheral components via HTTP requests.</li>
                    <li>Wrote OpenAPI/Swagger documents enabling the app development platform to interpret and interact with the API efficiently.</li>
                    <li>Enabled external access to the REST API by dockerized the Node server and deployed it to Kubernetes</li>
                </ul>
            </div>
        </div>
    )
}