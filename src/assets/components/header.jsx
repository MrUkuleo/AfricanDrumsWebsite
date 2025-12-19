import { useState } from 'react'; 
import LogoText from '../images/logo_text.png';
import '../../App.css';

function Header({ currentPage, setCurrentPage }) { 
  const handleNavClick = (page, e) => {
    e.preventDefault(); 
    setCurrentPage(page);
  };

  return (
    <>
      <header>
        <img src={LogoText} id="logo" />
        <ul>
          <li>
            <a
              className={currentPage === 'home' ? 'active' : ''} 
              onClick={(e) => handleNavClick('home', e)}
            >
              Главная
            </a>
          </li>
          <li>
            <a
              className={currentPage === 'about' ? 'active' : ''}
              onClick={(e) => handleNavClick('about', e)}
            >
              Польза от занятий
            </a>
          </li>
          <li>
            <a
              className={currentPage === 'schedule' ? 'active' : ''}
              onClick={(e) => handleNavClick('schedule', e)}
            >
              Расписание
            </a>
          </li>
          <li>
            <a
              className={currentPage === 'payment' ? 'active' : ''}
              onClick={(e) => handleNavClick('payment', e)}
            >
              Стоимость
            </a>
          </li>
          <li>
            <a
              className={currentPage === 'contacts' ? 'active' : ''}
              onClick={(e) => handleNavClick('contacts', e)}
            >
              Контакты
            </a>
          </li>
        </ul>
      </header>
    </>
  );
}

export default Header;