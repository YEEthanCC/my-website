'use client'
// import { Document, Page, pdfjs } from 'react-pdf';

import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import { useState } from 'react'

// pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

// 1. Import dynamic from next/dynamic
import dynamic from 'next/dynamic';

// 2. Dynamically import Document and Page components
//    Set ssr: false to ensure they are only loaded on the client-side.
const Document = dynamic(() => import('react-pdf').then((mod) => mod.Document), {
  ssr: false,
});

const Page = dynamic(() => import('react-pdf').then((mod) => mod.Page), {
  ssr: false,
});

// 3. Set the workerSrc only on the client-side
//    This ensures pdfjs is only configured in the browser.
if (typeof window !== 'undefined') {
  import('react-pdf').then((mod) => {
    mod.pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${mod.pdfjs.version}/build/pdf.worker.min.mjs`;
  });
}




export default function ResumePage() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);


    return (
        <div className='w-full flex justify-center'>
            <Document file={"/my-website/files/resume.pdf"} >
            <Page pageNumber={pageNumber} />
            </Document>
        </div>
    )
}