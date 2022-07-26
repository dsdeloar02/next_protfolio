import Head from 'next/head'
import Main from '../components/Main'
import Navbar from '../components/Navbar'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import ProjectItem from '../components/Projectitem'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Client | Front-End Developer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <Main/>
      <About/>
      <Skills/>
      <Projects/>
 

     
    </div>
  )
}
