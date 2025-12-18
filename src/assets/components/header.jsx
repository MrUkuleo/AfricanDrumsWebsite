import { useState } from 'react'
import LogoText from '../images/logo_text.png'
import '../../App.css'

function Header() {
  return (
    <>
      <header>
        <img src={LogoText} id="logo"/>
        <ul>
            <li><a href='#'>Главная</a></li>
            <li><a href='#about-us'>Польза от занятий</a></li>
            <li><a href='#schedule'>Расписание</a></li>
            <li><a href='#contacts'>Контакты</a></li>
        </ul>
      </header>
    </>
  )
}

export default Header
