import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faDiscord } from '@fortawesome/free-brands-svg-icons'
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'
import globals from '../components/globals'
import Link from 'next/link'

export default function Navbar() {
    return (
        <div>
            <div className="navbar fixed bg-base-100 border-b">
                <div className="navbar-start">
                    <a className="btn no-animation btn-ghost normal-case text-xl text-gradient">FDP Client</a>
                </div>
                <div className="navbar-center lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li><Link href='/'><a>Home</a></Link></li>
                        <li><Link href='/download'><a>Download</a></Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <ul className="menu menu-horizontal p-0">
                        <li><a href={globals.repo_url}><FontAwesomeIcon icon={faGithub} />GitHub</a></li>
                        <li><a href={globals.discord}><FontAwesomeIcon icon={faDiscord}/>Discord</a></li>
                    </ul>
                </div>
            </div>
            <div className="navbar bg-base-100">
                {/* placeholder */}
            </div>
            <p className="navbar mx-auto menu-horizonal space-x-3 border-b">
                &nbsp;&nbsp;&nbsp;<FontAwesomeIcon icon={faCircleInfo} />
                <span>UnlegitMC Team stands with Ukraine! 🇺🇦</span>
                <button className='font-semibold absolute right-10 text-2xl' onClick={closeUkAlert}>
                    <span>x</span>
                </button>
            </p>
        </div>
    )
}

function closeUkAlert(event) {
    let element = event.target;
    while (element.nodeName !== "BUTTON") {
        element = element.parentNode;
    }
    element.parentNode.parentNode.removeChild(element.parentNode);
}