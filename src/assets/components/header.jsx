import { useState } from 'react'
import Logo from '../images/logo.png'
import '/home/mrukuleo/Документы/GitHub/AfricanDrumsWebsite/src/App.css'

function Header() {
  return (
    <>
      <header>
        <img id="logo"/>
        <ul>
            <li><a href='#'>Главная</a></li>
            <li><a href='#'>О нас</a></li>
            <li><a href='#'>Записаться на урок</a></li>
            <li><a href='#'>Расписание</a></li>
        </ul>
      </header>
    </>
  )
}

export default Header
