import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import globals from '../components/globals'

export default function Footer() {
    return (
        <footer className="footer footer-center py-4 border-t p-4 text-base-content">
            <div className="menu-horizontal">
                Made with <FontAwesomeIcon icon={faHeart} className="heartcolor" /> by <a href={globals.repo_url} className="text-primary">UnlegitMC</a>
            </div>
        </footer>
    )
}