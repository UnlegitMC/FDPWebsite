import Head from 'next/head'
import Link from 'next/link'
import Typewriter from 'typewriter-effect';

export default function MainPage() {
  return (
    <div>
      <Head>
        <title>Home - FDPClient</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <img src="/steve-with-sword.png" class="absolute right-10" />
      <div class="hero min-h-screen bg-base-200">
        <div class="hero-content text-center bg-base-100 backdrop-blur bg-opacity-50">
          <div class="max-w-md">
            <h1 class="text-6xl font-bold text-gradient">FDP Client</h1>
            <div class="py-6 text-xl">
              <Typewriter
                options={{
                  strings: ['Best Minecraft 1.8.9 hacked client', 'Free and open-source', 'Fast and lightweight', 'By UnlegitMC Team'],
                  autoStart: true,
                  loop: true
                }}
              />
            </div>
            <Link href='#content'><a class="btn btn-primary">Get Started</a></Link>
          </div>
        </div>
      </div>

      <div class="hero min-h-screen bg-base-200" id="content">
        <div class="hero-content text-center">
          <h1 class="text-6xl font-bold text-gradient">Content</h1>
        </div>
      </div>
    </div>
  )
}