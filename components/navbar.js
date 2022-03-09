import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faDiscord } from '@fortawesome/free-brands-svg-icons'
import globals from '../components/globals'

export default function Navbar() {
    return (
        <div>
            <div className="navbar fixed bg-base-100">
                <div className="navbar-start">
                    <a className="btn no-animation btn-ghost normal-case text-xl text-gradient">FDP Client</a>
                </div>
                <div className="navbar-center lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li><a href='/'>Home</a></li>
                        <li><a href='/download'>Download</a></li>
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
        </div>
    )
}