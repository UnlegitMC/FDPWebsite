import Head from 'next/head'
import Link from 'next/link'
import Typewriter from 'typewriter-effect'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRotate } from '@fortawesome/free-solid-svg-icons'
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'
import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

export default function MainPage() {
  return (
    <div className="select-none">
      <Head>
        <title>Home - FDPClient</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="hero bg-minecraft-1">
        <div className='hero min-h-screen bg-base-200 backdrop-blur bg-opacity-30'>
          <img src="/images/steve-with-sword.png" alt="Steve holding a sword" className="absolute right-10 top-10" draggable="false" />
        </div>
        <div className="hero-content text-center bg-base-100 backdrop-blur bg-opacity-50 rounded-xl px-28 py-7">
          <div className="max-w-md">
            <h1 className="text-6xl font-bold text-gradient">FDP Client</h1>
            <div className="py-6 text-2xl">
              <Typewriter
                options={{
                  strings: ['Best Minecraft 1.8.9 hacked client', 'Free and open-source', 'Fast and lightweight'],
                  autoStart: true,
                  loop: true
                }}
              />
            </div>
            <Link href='#content'><a className="btn btn-primary">Get Started</a></Link>
          </div>
        </div>
      </div>
      <div className="hero min-h-screen bg-base-200 border-b">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold text-gradient">Popular!</h1>
            <p className="py-6 text-xl">We have a big open-source community!
            And FDP Client are able to load LiquidBounce scripts, we are LiquidBased.
            Now {loadUserCount()} users are using FDP Client</p>
          </div>
        </div>
      </div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <iframe src="https://discord.com/widget?id=899275378760245278&theme=dark" width="350" height="500" allowtransparency="true" frameBorder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
          <div>
            <h1 className="text-5xl font-bold text-gradient">Chat!</h1>
            <p className="py-6 text-xl">Join our discord server and chat with our friendly community!</p>
            <button className="btn btn-primary">Join Now!</button>
          </div>
        </div>
      </div>
    </div>
  )
}

function loadUserCount() {
  const { data, error } = useSWR('https://bstats.org/api/v1/plugins/11076/charts/servers/data', fetcher)

  if (error) return (<div className="tooltip text-error" data-tip="Failed to load :("><FontAwesomeIcon icon={faExclamationTriangle} /></div>)
  if (!data) return (<div className="tooltip" data-tip="Loading..."><FontAwesomeIcon icon={faRotate} className="animate-spin" /></div>)

  return (
    <div className="tooltip text-info" data-tip={"Fetched on " + new Date()}>
      {data[data.length - 1][1]}
    </div>
  )
}