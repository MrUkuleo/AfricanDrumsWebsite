import { BiUnderline } from "react-icons/bi";

function Payment() 
{  
    return(
        <>
            <section className="payment">
                <h1 id="payment">СТОИМОСТЬ</h1>
                <ul>
                    <li><div className="payment-point">Ознакомительный урок: </div> 500 рублей</li>
                    <li><div className="payment-point">Стоимость одного занятия: </div> 1 200 рублей</li>
                    <li><div className="payment-point">Стоимость десяти занятий: </div> 10 000 рублей</li>
                </ul>
                <h5 style={{textDecoration: "underline"}}>Акция "Приведи друга"</h5>
                <p><div className="payment-point">за каждого приведённого друга - стоимость одного урока для тебя и для друга:</div> 500 рублей</p>
            </section>
        </>
    )
}

export default Payment;