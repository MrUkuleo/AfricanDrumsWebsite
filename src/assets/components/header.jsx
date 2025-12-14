import { useState } from 'react'
import LogoText from '../images/logo_text.png'
import '/home/mrukuleo/Документы/GitHub/AfricanDrumsWebsite/src/App.css'

function Header() {
  return (
    <>
      <header>
        <img src={LogoText} id="logo"/>
        <ul>
            <li><a href='#'>Главная</a></li>
            <li><a href='#about-us'>О нас</a></li>
            <li><a href='#'>Записаться на урок</a></li>
            <li><a href='#'>Расписание</a></li>
        </ul>
      </header>
    </>
  )
}

export default Header
