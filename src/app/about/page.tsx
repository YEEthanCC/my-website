'use client'

export default function AboutPage() {
    return (
        <div className="w-full flex justify-center">
            <div className="w-2/3">
                <h1 className="text-xl mt-8 font-bold">Education Background</h1>
                <ul className="ms-8">
                    <li className="mt-4 font-bold">Bachelor of Applied Science, Computer Science from Simon Fraser University</li>
                </ul>
                <h1 className="text-xl mt-8 font-bold">Professional Experience</h1>
                <ul className="ms-8">
                    <li className="mt-4 font-bold">Software Engineer Intern at Advantech</li>
                    <ul className="list-disc list-outside ms-4">
                        <li>Streamlined evaluation process for LLMs on benchmarks specified by customers using opensource Python framework</li>
                        <li>Developed tools utilizing GenAI to automate testing process for apps</li>
                        <li>Designed and implemented AI agents automating customer product inquireies reducing sales team workload</li>
                    </ul>
                    <li className="mt-4 font-bold">Lv. 108 on Arknights</li>
                </ul>
            </div>
        </div>
    )
}