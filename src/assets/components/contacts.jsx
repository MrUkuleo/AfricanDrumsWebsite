import { FaTelegramPlane, FaWhatsapp } from "react-icons/fa";

function CopyAddress() {
    const address = "Москва, Новая Басманная ул., 23, стр. 2";
    navigator.clipboard.writeText(address);
    alert("Адрес скопирован в буфер обмена: " + address);
}

function CopyPhone(){
    const phone = "+7(985)268-08-00";
    navigator.clipboard.writeText(phone);
    alert("Телефон скопирован в буфер обмена: " + phone);
}

function Contacts()
{
    return(
    <>
        <section className="contacts">
            <h1 id="contacts">КОНТАКТЫ</h1>
            <ul>
                <li><div className="phoneToCopy" onClick={CopyPhone}><p>+7(985)268-08-00</p></div></li>
                <li><a href="https://t.me/Jembe_School"><FaTelegramPlane /> Telegram</a></li>
                <li><a href="https://wa.me/79852680800"><FaWhatsapp /> WhatsApp</a></li>
                <li><div className="adresToCopy" onClick={CopyAddress}>Москва, Новая Басманная ул., 23, стр. 2, 1-й этаж</div></li>
            </ul>
            <div className="map">
                <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Ae101ce696772fec8b9290d2132f07cb8b2e5502e256df6040cf1b956f02cbf62&amp;source=constructor" width="320" height="240" frameborder="0"></iframe>
            </div>
        </section>
    </>
    )
}

export default Contacts