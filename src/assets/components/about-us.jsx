import { useState } from 'react'
import Drum from '../images/drum.jpg'
import '../../App.css'

function AboutUs() {
  return (
    <>
      <section className="about-us">
        <h1 id='about-us'>ПОЛЬЗА ОТ ЗАНЯТИЙ</h1>

        <div className="parapraph" id='pl'>
            <img src={Drum}/>
            <div className="paragraph-content">
                <h3>У детей и подростков, которые занимаются африканскими барабанами:</h3>
                <ul>
                    <li>улучшается сон и аппетит;</li>
                    <li>повышается успеваемость;</li>
                    <li>снижается время, проводимое в гаджетах;</li>
                    <li>повышается мотивация и усидчивость;</li>
                </ul>
            </div>
        </div>

        {/* <div className="parapraph" id='pl'>
            <img src={ZG}/>
            <div className="paragraph-content">
                <h3>Прям жесть какие крутые</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores optio, assumenda animi quasi mollitia molestiae dolores doloremque? Ipsa ab aliquid quam iure reprehenderit totam, perferendis repellendus beatae, quis ut debitis?</p>
            </div>
        </div> */}
      </section>
    </>
  )
}

export default AboutUs
