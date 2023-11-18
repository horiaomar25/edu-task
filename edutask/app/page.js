import React from 'react'
import Navigation from './Navigation'
import Link from 'next/link'




export default function Home() {
  return (
    <>
    <div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/tasks">
        <a>Tasks</a>
        <h1>Tasks</h1>
      </Link>
      <Link href="/dashboard">
        <a>Dashboard</a>
      </Link>
    </div>
      
     
    </>

  )
}
