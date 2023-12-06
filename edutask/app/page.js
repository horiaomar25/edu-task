import React from 'react'
import Navigation from './Navigation'
import Link from 'next/link'
import logo from '../public/homelogo.png'
import Image from 'next/image'
import Button from '@mui/material/Button';



export default function Home() {
  return (
    <>
   <div style={{ display: "flex", justifyContent: "center", marginTop: "50px", alignItems: "center"}}>
    <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", width: "500px"}}>
    <h2 style={{ fontSize: "50px"}}> Welcome to EduTask</h2>
    <p> A task manager that will helps teachers and teaching assistants keep track of tasks</p>
    <Button  sx={{backgroundColor:"#8338ec", color: "white", width: "70%", borderRadius:"10px"}}>Dashboard</Button>
    </div>
    <Image src={logo} alt="illustration of using taskboard" width="500" style={{border: "solid 1px black", margin: "30px"}} />
   </div>
    
     
    </>

  )
}
