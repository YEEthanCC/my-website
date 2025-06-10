'use client';
import ProjectCard from "../../components/project-card";
import { redirect } from 'next/navigation'

export default function ProjectPage() {
  return (
    <div className='w-full h-full flex flex-col items-center'>
      <ProjectCard
        imageURL="/my-website/images/ai-procurement-assistant/1.png"
        title="AI Procurement Assistant"
        description="AI chatbot that automated customer product inquiries and sales support leveraging RAG(Retrieval-augmented generation) and GenAI"
        linkToProject="/projects/ai-procurement-assistant"
      />
      <ProjectCard
        imageURL="/my-website/images/smart-house-system/1.png"
        title="Smart House System"
        description="GenAI powered smart house system that accomodated the needs of everyday household"
        linkToProject="/projects/smart-house-system"
      />
      <ProjectCard
        imageURL="/my-website/images/incident-report-app/1.png"
        title="Incident Report APP"
        description="CURD app that allows users to report incidents on a map"
        linkToProject="/projects/incident-report-app"
      />
    </div>
  )
}