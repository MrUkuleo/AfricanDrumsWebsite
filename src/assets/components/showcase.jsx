import { useState } from 'react'
import LogoPic from '../images/logo.png'
import '/home/mrukuleo/Документы/GitHub/AfricanDrumsWebsite/src/App.css'

function Showcase() {
  return (
    <>
      <div className="showcase">
        <img src={LogoPic}/>
        <div className="left-content">
            <h1>ШКОЛА АФРИКАНСКИХ БАРАБАНОВ ДЛЯ ДЕТЕЙ 7-12 ЛЕТ</h1>
            <button>ЗАПИСАТЬСЯ НА УРОК</button>
        </div>
      </div>
    </>
  )
}

export default Showcase
