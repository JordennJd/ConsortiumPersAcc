import style from './sponsors.module.css';

const Sponsors = (props) => {
    const countSponsors = props.sponsors.lenght;
    const arc = 2 * Math.PI * (1 / countSponsors);
    const radius = 40;
    for (let i=0; i<countSponsors; i++) {
        const angle = i * arc;
        const x = radius * Math.cos(angle);
        const y = radius * Math.sin(angle);
    }
    
    return (
        <div className={style.sponsors} style={props.style}>
            {props.sponsors.map(elem =>
                <img src={process.env.PUBLIC_URL + '/image/otherImages/SponsorsLogo/'+elem+'Logo.svg'} className={style.sponsors__img} />
            )}
        </div>
    );
}

export default Sponsors;