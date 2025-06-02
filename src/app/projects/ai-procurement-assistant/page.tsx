import { FaGithub } from 'react-icons/fa'

export default function AIProcurementAssistantPage() {
    return (
        <div className="w-full px-8 py-4">
            <h1 className="text-2xl">AI Procurement Assistant</h1>
            <a href="https://github.com/YEEthanCC/ai-procurement-assistant" className="mx-4 mt-4 flex items-center hover:text-blue-700"><FaGithub className='m-1' size={25} /> Github link</a>
            <p className="m-4">AI chatbot that automated customer product inquiries and sales support leveraging RAG(Retrieval-augmented generation) and GenAI</p>
            <h2 className="text-xl">Tech Stacks</h2>
            <p className="m-4">React, Vite, Flask, Langgraph, GraphRag, Redis, PostgreSQL</p>
            <h2 className="text-xl">Project Overview</h2>
            <ul className="list-disc list-outside m-4">
                <li>Developed an AI chatbot that automated customer product inquiries and sales support with RAG and GenAI, significantly improving service availability and reducing sales team workload.</li>
                <li>Designed AI workflows that retrieved information relevant to users’ queries from the vector database or other external resources using the LangGraph framework, enabling the chatbot to respond with accurate and contextually relevant information.</li>
                <li>Established a WebSocket connection using the Flask framework for more straightforward integration with Python-based LangGraph, and allowing more efficient communication between the client and the server </li>
                <li>Implemented a web crawler that collected information on more than 3000 products from the company’s website with Playwright to build the chatbot’s knowledge base for RAG operation.</li>
                <li>Constructed chatbot's knowledge base using GraphRag to outperform traditional RAG on establshing connection between products in inquiries</li>
            </ul>
        </div>
    )
}