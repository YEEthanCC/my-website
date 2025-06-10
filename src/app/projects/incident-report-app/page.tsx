'use client'
import { FaGithub } from 'react-icons/fa'
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";
import { useState } from 'react';

export default function IncidentReportAppPage() {
    const imageLinks =[
        "/my-website/images/incident-report-app/1.png", 
        "/my-website/images/incident-report-app/2.png",
        "/my-website/images/incident-report-app/3.png",
        "/my-website/images/incident-report-app/4.png", 
        "/my-website/images/incident-report-app/5.png", 
        "/my-website/images/incident-report-app/6.png"
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
                <h1 className="text-2xl font-bold">Incident Report App</h1>
                <a href="https://github.com/YEEthanCC/incident_report_v2" className="mt-4 flex items-center hover:text-blue-700"><FaGithub className='m-1' size={25} /> Github</a>
                <p className="mt-2">CURD app that allows users to report incidents on a map</p>
                <h2 className="text-xl mt-4">Tech Stacks</h2>
                <p className="mt-1">MongoDB, Express, Angular, Node.js, JSON Web Token </p>
            </div>
            <div className='col-start-2 col-span-4'>
                <h2 className="text-xl">Project Overview</h2>
                <ul className="list-disc list-outside m-4">
                    <li>Designed backend logic using Express framework to manage routing and interaction with the database in an organized manner.</li>
                    <li>Implemented mapping components using Leaflet and Nominatim APIs to support mapping and geocoding functionalities,enhancing the visual display of incident locations.</li>
                    <li>Set up proper routing using Angular Router allowing smooth navigation between different web pages.</li>
                    <li>Applied dependency injection on the handling of reports data between different components using Angular Service to make the code less coupled and more reusable.</li>
                    <li>Implemented authorization and authentication by generating and verifying JSON Web Token in the backend, using Angular directive for conditional rendering, and applying AuthGuard for route protection in the frontend, ensuring public access to report data while restricting modification and report creation to authorized users</li>
                    <li>Designed an intuitive and visually consistent UI using Angular Material and Bootstrap, enhancing user experience.</li>
                </ul>
            </div>
        </div>
    )
}