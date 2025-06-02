import { FaGithub } from 'react-icons/fa'

export default function ContactPage() {
    return(
        <div className="w-full px-8 py-4">
            <h1>Contact me:</h1>
            <ul>
                <li><a href="https://github.com/YEEthanCC" className='className="mx-4 mt-4 flex items-center hover:text-blue-700'><FaGithub className='m-1' size={25} />Github</a></li>
                <li><a href="https://www.linkedin.com/in/chen-ethan-bb151b333/">Linkedin</a></li>
                <li>Email: yeethan59@gmail.com</li>
            </ul>
        </div>
    )
}