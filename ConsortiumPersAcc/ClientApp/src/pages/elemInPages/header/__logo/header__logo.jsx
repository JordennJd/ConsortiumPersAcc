import { Link, Route } from 'react-router-dom';
import logo from '../../../../image/image__logo/logo.svg';
import './_background/header__logo_background_none.css';

const Header__logo = () => {
    return(
        <Link to="/">
            <img src={logo} className='header__logo_background_none'></img>
        </Link>
    );
}

export default Header__logo;