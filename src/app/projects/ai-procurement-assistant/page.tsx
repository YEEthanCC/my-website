'use client'
import { FaGithub } from 'react-icons/fa'
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";
import { useState } from 'react';

export default function AIProcurementAssistantPage() {
    const imageLinks =[
        "/my-website/images/ai-procurement-assistant/1.png"
    ]
    const [image, setImage] = useState(0)
    
    return (
        <div className="grid grid-cols-6 w-full">
            <div className='col-start-2 col-span-2 flex justify-center p-4 items-center'>
                <SlArrowLeft className='hover:text-blue-700 mr-1'  onClick={() => setImage((image + imageLinks.length - 1) % imageLinks.length)} />
                <img
                    src={imageLinks[image]}
                    alt="Profile picture"
                    className='w-96'
                ></img>
                <SlArrowRight className='hover:text-blue-700 ml-1' onClick={() => setImage((image + 1) % imageLinks.length)} />
            </div>
            <div className='col-start-4 col-span-2 p-4'>
                <h1 className="text-2xl font-bold">Incident Report App</h1>
                <a href="https://github.com/YEEthanCC/ai-procurement-assistant" className="mt-4 flex items-center hover:text-blue-700"><FaGithub className='m-1' size={25} /> Github</a>
                <p className="mt-2">AI chatbot that automated customer product inquiries and sales support leveraging RAG(Retrieval-augmented generation) and GenAI</p>
                <h2 className="text-xl mt-4">Tech Stacks</h2>
                <p className="mt-1">React, Vite, Flask, Langgraph, GraphRag, Redis, PostgreSQL</p>
            </div>
            <div className='col-start-2 col-span-4'>
                <h2 className="text-xl">Project Overview</h2>
                <ul className="list-disc list-outside m-4">
                    <li>Developed an AI chatbot that automated customer product inquiries and sales support with RAG and GenAI, significantly improving service availability and reducing sales team workload.</li>
                    <li>Designed AI workflows that retrieved information relevant to users’ queries from the vector database or other external resources using the LangGraph framework, enabling the chatbot to respond with accurate and contextually relevant information.</li>
                    <li>Established a WebSocket connection using the Flask framework for more straightforward integration with Python-based LangGraph, and allowing more efficient communication between the client and the server </li>
                    <li>Implemented a web crawler that collected information on more than 3000 products from the company’s website with Playwright to build the chatbot’s knowledge base for RAG operation.</li>
                    <li>Constructed chatbot's knowledge base using GraphRag to outperform traditional RAG on establshing connection between products in inquiries</li>
                </ul>
            </div>
        </div>
    )
}