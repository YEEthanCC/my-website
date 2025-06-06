'use client'
import { FaGithub } from 'react-icons/fa'
import Image from 'next/image';

export default function IncidentReportAppPage() {
    return (
        <div className="w-full px-8 py-4">
            <h1 className="text-2xl">Incident Report App</h1>
            <a href="https://github.com/YEEthanCC/incident_report_v2" className="mx-4 mt-4 flex items-center hover:text-blue-700"><FaGithub className='m-1' size={25} /> Github link</a>
            <p className="m-4">CURD app that allows users to report incidents on a map</p>
            <h2 className="text-xl">Tech Stacks</h2>
            <p className="m-4">MongoDB, Express, Angular, Node.js, JSON Web Token </p>
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
    )
}