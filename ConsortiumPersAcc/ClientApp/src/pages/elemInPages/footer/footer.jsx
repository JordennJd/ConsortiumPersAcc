import Header__logo from "../header/__logo/header__logo";
import FooterMenu from "./footerMenu/footerMetu";
import style from './footer.module.css';
import SocialNetwork from "./socialNetwork/socialNetwork";

const Footer = () => {
    return (
        <footer className={style.footer}>
            <Header__logo />
            <FooterMenu />
            <SocialNetwork />
        </footer>
    );
}

export default Footer;