import { useState } from 'react'
import ZG from '../images/заглушка.jpg'
import '../../App.css'

function AboutUs() {
  return (
    <>
      <section className="about-us">
        <h1 id='about-us'>О НАС</h1>

        <div className="parapraph" id='pl'>
            <img src={ZG}/>
            <div className="paragraph-content">
                <h3>Мы крутые</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores optio, assumenda animi quasi mollitia molestiae dolores doloremque? Ipsa ab aliquid quam iure reprehenderit totam, perferendis repellendus beatae, quis ut debitis?</p>
            </div>
        </div>

        <div className="parapraph" id='pr'>
            <div className="paragraph-content">
                <h3>Очень крутые</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores optio, assumenda animi quasi mollitia molestiae dolores doloremque? Ipsa ab aliquid quam iure reprehenderit totam, perferendis repellendus beatae, quis ut debitis?</p>
            </div>
            <img src={ZG}/>
        </div>

        <div className="parapraph" id='pl'>
            <img src={ZG}/>
            <div className="paragraph-content">
                <h3>Прям жесть какие крутые</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores optio, assumenda animi quasi mollitia molestiae dolores doloremque? Ipsa ab aliquid quam iure reprehenderit totam, perferendis repellendus beatae, quis ut debitis?</p>
            </div>
        </div>
      </section>
    </>
  )
}

export default AboutUs
