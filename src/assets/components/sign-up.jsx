import { useState } from 'react'
import '../../App.css'

function SignUp() {
  return (
    <>
        <section className="sign-up">
            <h1 id='sign-up'>ЗАПИСЬ НА УРОК</h1>
            <form>
                <input type="text" placeholder="Имя"/>
                <input type="text" placeholder="Фамилия"/>
                <input type="text" placeholder="Отчество (при наличии)"/>
                <select>
                    <option value="" disabled hidden selected>Укажите количество детей</option>
                    <option value="1">1 ребёнок</option>
                    <option value="2">2 ребёнка</option>
                    <option value="3">3 ребёнка</option>
                    <option value="4">4 ребёнка</option>
                    <option value="5">5 детей</option>
                </select>
                <button type="submit">ЗАПИСАТЬСЯ</button>
            </form>
        </section>
    </>
  )
}

export default SignUp
