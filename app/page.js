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
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <ProjectSession />
      </section>
      <section id="contact">
        <GetInTougth />
      </section>
    </div>
  )
}

export default page
