'use client'
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import { useState } from 'react'

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;


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