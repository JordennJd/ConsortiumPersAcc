import style from './footerMenu.module.css';

const infa = [
    { name: 'Телефон:', infa: '8-(800)-555-35-35' },
    { name: 'Электронная почта:', infa: 'engineer@guap.ru' },
    { name: 'Адрес:', infa: '196128, Санкт-Петербург, Московский пр., д. 149в, лит. А' }
];

const FooterMenu = () => {
    return (
        <nav className={style.FooterMenu}>
            {infa.map(elem =>
                <div>
                    <p>{elem.name}</p>
                    <p>{elem.infa}</p>
                </div>
            )}
        </nav>
    );
}

export default FooterMenu;