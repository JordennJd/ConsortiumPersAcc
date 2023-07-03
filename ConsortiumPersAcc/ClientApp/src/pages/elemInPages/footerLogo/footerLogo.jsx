import "./footerLogo.css";
import img1 from './../../../image/otherImages/wheelGear.svg';
import img2 from './../../../image/otherImages/SUAIlogo.svg';
import backgroundLogo from "./../../../image/background/backgroundFooter.png";

const FooterLogo = () => {
    const styleFoot = {
        backgroundImage: `url(${backgroundLogo})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%"
    }
    return (
        <footer className="footerLogo" style={styleFoot}>
            <img src={img1} className="footerLogo__img"></img>
            <img src={img2} className="footerLogo__img"></img>
        </footer>
    );
}

export default FooterLogo;