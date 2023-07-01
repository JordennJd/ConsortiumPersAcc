import style from './sponsors.module.css';

const Sponsors = (props) => {
    let i = 1;
    const Grid_column = (id) => {
        return ((id % 4 === 1 || id % 4 === 0) ? 2 : 5);
    }
    const sponsorsStyle = {
        gridColumn: Grid_column(props.id),
        gridRow: props.id * 2,
        position: "absolute",
        top: 0, left: 0,
        position: "relative",
        transition: "1s",
        /*height: 196.6,
        width: 163.6,*/
        border: "1px solid #fff"
    }
    return (
        <div
            className={style.sponsors}
            style={{ ...props.style, ...sponsorsStyle }}
        >

            {props.sponsors.map(elem => (
                <>
                    <Image elem={elem} countSponsors={5} id={i++} parent={props.parent} />
                </>
            ))}
        </div>
    );
}

const Image = (props) => {
    if (typeof props.parent != "undefined") {
        const countSponsors = props.countSponsors;
        const arc = Math.PI * (1 / countSponsors);
        const radius = 100;

        const angle = props.id * arc + 9 * Math.PI / 10;
        const x = radius * Math.cos(angle) + 163.6 / 2 + "px";//2.8+ props.parent.width / 8
        const y = radius * Math.sin(angle) - 169 + "px";//1.45 - props.parent.height / 2.5
        const sponsorsStyle = {
            position: "absolute",
            left: x,
            top: y,
            height: "auto"
        }
        return (
            <>
                <img
                    src={process.env.PUBLIC_URL + '/image/otherImages/SponsorsLogo/' + props.elem.name + ".svg"}
                    className={style.sponsors__img}
                    style={sponsorsStyle}
                />
            </>
        );
    } else {
        return (<></>);
    }


}

export default Sponsors;