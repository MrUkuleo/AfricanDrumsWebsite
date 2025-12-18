function Contacts()
{
    return(
    <>
        <section className="contacts">
            <h1 id="contacts">КОНТАКТЫ</h1>
            <ul>
                <li><p>+7(985)268-08-00</p></li>
                <li><a href="https://t.me/Jembe_School">Telegram</a></li>
                <li><a href="wa.me/79852680800">WhatsApp</a></li>
                <li>Новая Басманная ул., 23, стр. 2, Москва</li>
            </ul>
            <div className="map">
                <script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Ae101ce696772fec8b9290d2132f07cb8b2e5502e256df6040cf1b956f02cbf62&amp;width=500&amp;height=400&amp;lang=ru_RU&amp;scroll=true"></script>
            </div>
        </section>
    </>
    )
}

export default Contacts