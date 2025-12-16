import { useState } from 'react'
import Header from './assets/components/header'
import Showcase from './assets/components/showcase'
import AboutUs from './assets/components/about-us'
import SignUp from './assets/components/sign-up'
import './App.css'

function App() {
  return (
    <>
      <Header/>
      <Showcase/>
      <AboutUs/>
      <SignUp/>
    </>
  )
}

export default App
