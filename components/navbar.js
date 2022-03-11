import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faDiscord } from '@fortawesome/free-brands-svg-icons'
import globals from '../components/globals'
import Link from 'next/link'
import { ToastProvider, useToasts } from 'react-toast-notifications'
import { useEffect } from 'react'

var toastPoped = toastPoped || false
var toastProcessed = toastProcessed || false
var toastFunc = () => { console.error("illegal state: this function should not be called") }

const FormWithToasts = () => {
    if (!toastPoped) {
        const { addToast } = useToasts()

        toastFunc = () => {
            toastPoped = true
            addToast((<a href='https://supportukrainenow.org/'>🇺🇦 UnlegitMC Team stands with Ukraine! And you?</a>), { appearance: 'info', autoDismiss: false });
        }
    }

    return (<p></p>)
};

export default function Navbar() {
    useEffect(() => {
        if (!toastProcessed) {
            toastFunc()
        }
        toastProcessed = true
    })
    return (
        <div>
            <div className="navbar bg-base-100 shadow bg-opacity-90 border-b fixed top-0 z-50 backdrop-blur-xl">
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
                        <li><a href={globals.repo_url}><FontAwesomeIcon icon={faGithub}/>GitHub</a></li>
                        <li><a href={globals.discord}><FontAwesomeIcon icon={faDiscord}/>Discord</a></li>
                    </ul>
                </div>
            </div>
            <ToastProvider>
                <FormWithToasts />
            </ToastProvider>
        </div>
    )
}