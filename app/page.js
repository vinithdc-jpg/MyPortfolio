import About from '@/Components/About'
import GetInTougth from '@/Components/GetInTougth'
import Hero from '@/Components/Hero'
import Navbar from '@/Components/Navbar'
import ProjectSession from '@/Components/ProjectSession'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <ProjectSession />
      <GetInTougth />
    </div>
  )
}

export default page
