import React from 'react'
import Navigation from './Navigation'
import Link from 'next/link'




export default function Home() {
  return (
    <>
    <div>
      
      <Link href="/tasks">
        Tasks
       
      </Link>
      <Link href="/dashboard">
      Dashboard
      </Link>
    </div>
      
     
    </>

  )
}
