import './header__navigation.css';

const Hedaer__navigation = () => {
    const navElem = [
        "О школе",
        "Подразделения",
        "Студентам",
        "Школьникам",
        "Партнёрам",
        "Контакты"
    ];
    return (
        <nav className="header__nav">
            {navElem.map(elem => 
                <a href="#" className="header__a">{elem}</a>
            )}
        </nav>
    );
}

export default Hedaer__navigation;