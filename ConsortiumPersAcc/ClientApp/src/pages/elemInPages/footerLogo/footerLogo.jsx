import "./footerLogo.css";
import img1 from './../../../image/otherImages/wheelGear.svg';
import img2 from './../../../image/otherImages/SUAIlogo.svg';

const FooterLogo = () => {
    return (
        <footer className="footerLogo">
            <img src={img1} className="footerLogo__img"></img>
            <img src={img2} className="footerLogo__img"></img>
        </footer>
    );
}

export default FooterLogo;