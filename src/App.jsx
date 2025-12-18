import { useState } from 'react'
import Header from './assets/components/header'
import Showcase from './assets/components/showcase'
import AboutUs from './assets/components/about-us'
import Schedule from './assets/components/schedule'
// import SignUp from './assets/components/sign-up'
import Contacts from './assets/components/contacts'
import './App.css'

function App() {
  return (
    <>
      <Header/>
      <Showcase/>
      <AboutUs/>
      <Schedule/>
      {/* <SignUp/> */}
      <Contacts/>
    </>
  )
}

export default App
