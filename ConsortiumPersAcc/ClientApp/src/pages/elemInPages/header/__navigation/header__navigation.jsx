import './header__navigation.css';
import {Link, NavLink} from "react-router-dom";

const Hedaer__navigation = (props) => {
    const logout = async () => {
        await fetch('api/Authificate/Logout', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
        });

        props.setName(undefined);
    }
    const navElem = [
        "О школе",
        "Подразделения",
        "Студентам",
        "Школьникам",
        "Партнёрам",
    ];
    let menu;
    console.log(props.name)
    if (props.name == undefined) { // не забыть поменять
        menu = (
            <nav className="header__nav">
                {navElem.map(elem =>
                    <a href="#" className="header__a">{elem}</a>
                )}
                <NavLink className="header__a" to="/login">Войти</NavLink>
                <NavLink className="header__a" to="/register">Зарегистрироваться</NavLink>
            </nav>
        );
    } else {
        menu = (
            <nav className="header__nav">
                    {navElem.map(elem =>
                        <a href="#" className="header__a">{elem}</a>
                    )}
                <Link to="/" className="header__a" onClick={logout} >Выйти </Link>
                <Link to="/account" className="nav-link" >{props.name}</Link>

            </nav>
        )
    }
    
    return (
        menu
    );
}

export default Hedaer__navigation;