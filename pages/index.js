import Head from 'next/head'
import Link from 'next/link'
import Typewriter from 'typewriter-effect'

export default function MainPage() {
  return (
    <div className="select-none">
      <Head>
        <title>Home - FDPClient</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <img src="/steve-with-sword.png" alt="Steve holding a sword" className="absolute right-10" draggable="false" />
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center bg-base-100 backdrop-blur bg-opacity-50">
          <div className="max-w-md">
            <h1 className="text-6xl font-bold text-gradient">FDP Client</h1>
            <div className="py-6 text-2xl">
              <Typewriter
                options={{
                  strings: ['Best Minecraft 1.8.9 hacked client', 'Free and open-source', 'Fast and lightweight', 'By UnlegitMC Team'],
                  autoStart: true,
                  loop: true
                }}
              />
            </div>
            <Link href='#content'><a className="btn btn-primary">Get Started</a></Link>
          </div>
        </div>
      </div>

      <div className="hero min-h-screen bg-base-200" id="content">
        <div className="hero-content text-center">
          <h1 className="text-6xl font-bold text-gradient">Content</h1>
        </div>
      </div>
    </div>
  )
}