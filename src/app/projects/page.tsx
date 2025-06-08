'use client';
import ProjectCard from "../../components/project-card";
import { redirect } from 'next/navigation'

export default function ProjectPage() {
  return (
    <div className='w-full h-full flex flex-col items-center'>
      <ProjectCard
        imageURL="/my-website/images/incident-report-app/1.png"
        title="Incident Report APP"
        description="CURD app that allows users to report incidents on a map"
        linkToProject="/projects/incident-report-app"
      />
    </div>
  )
}