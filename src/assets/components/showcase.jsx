import { useState } from 'react'
import LogoPic from '../images/logo.png'
import '../../App.css'

function Showcase() {
  return (
    <>
      <section className="showcase">
        <img src={LogoPic}/>
        <div className="left-content">
            <h1>ШКОЛА АФРИКАНСКИХ БАРАБАНОВ ДЛЯ ДЕТЕЙ И ПОДРОСТКОВ</h1>
            {/* <a href='#sign-up'><button>ЗАПИСАТЬСЯ НА УРОК</button></a> */}
        </div>
      </section>
    </>
  )
}

export default Showcase
