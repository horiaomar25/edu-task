import React from 'react'
import Image from 'next/image'
import information from "../assets/information.png"

const AboutSection = () => {
  return (
    <>
    <section >
        <div >
    <h2>About</h2>
    <Image src={information} width={650} alt="information graphic about teaching assistants"  style={{border: "solid 1px black", borderRadius: "6px"}} />
    </div>
    </section>
    </>
  )
}

export default AboutSection