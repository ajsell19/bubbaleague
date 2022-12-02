import Head from 'next/head'
import Image from 'next/image'
import { useRef } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {
  const standingsData = [
    {
      team: "Raptors",
      wins: 10,
      losses: 0
    },
    {
      team: "Bucks",
      wins: 10,
      losses: 2
    },
    {
      team: "Lakers",
      wins: 12,
      losses: 3
    },
    {
      team: "Warriors",
      wins: 12,
      losses: 4
    }
  ]
  const standingsRef = useRef<HTMLHeadingElement>(null)

  function handleStandingsClick() {
    // TODO execute code in here
    standingsRef.current?.scrollIntoView({behavior: 'smooth'});
  };

  return (
    <div>
      <Head>
        <title>Ball Up Sports Association</title>
        <meta name="description" content="Generated by AJ" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className='bg-black text-white flex justify-between p-4'>
          <a href='/stats'>Stats</a>
          <a onClick={handleStandingsClick}>Standings</a>
          <a>Highlights</a>
          <a>Scores</a>
        </div>
        {/* Hero Image */}
        <div className='relative'>
          <h1 className='absolute w-full text-center text-white text-5xl top-1/2 font-bold'>Welcome to Bubba Leage!</h1>
          <img className='w-full h-96 object-cover' src="https://images.unsplash.com/photo-1546519638-68e109498ffc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1190&q=80" />
        </div>

        {/* Standings */}
        <h2 ref={standingsRef} className='text-center font-bold text-4xl my-4'>Standings</h2>

        <div className='grid grid-cols-4 m-4'>
          <p className='p-4 text-center bg-blue-500 text-white font-bold'>Rank</p>
          <p className='p-4 text-center bg-blue-500 text-white font-bold'>Team</p>
          <p className='p-4 text-center bg-blue-500 text-white font-bold'>W</p>
          <p className='p-4 text-center bg-blue-500 text-white font-bold'>L</p>

          {standingsData.map((teamData, index) => {
            return <div className='col-span-4 bg-blue-200 grid grid-cols-4'>
            <p className='border-l-4 border-r-4 border-b-4 text-center p-4 border-blue-600'>{index}</p> 
            <p className='border-r-4 border-b-4 text-center p-4 border-blue-600'>{teamData.team}</p>
            <p className='border-r-4 border-b-4 text-center p-4 border-blue-600'>{teamData.wins}</p>
            <p className='border-r-4 border-b-4 text-center p-4 border-blue-600'>{teamData.losses}</p>
            
            </div>
          })}
          
        </div>

      </main>

   
    </div>
  )
}
