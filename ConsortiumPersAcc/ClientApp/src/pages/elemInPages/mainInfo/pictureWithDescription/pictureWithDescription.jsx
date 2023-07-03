const PictureWithDescription = (props) => {
    const Grid_column_picture = (id) => {
        return ((id % 2 === 0) ? 1 : 2);
    }
    const Grid_column_description = (id) => {
        return ((id % 2 === 0) ? 2 : 1);
    }
    const divPictureStyle = {
        gridColumn: Grid_column_picture(props.id),
        gridRow: props.id,
        backgroundColor:"rgba(248, 249, 251, 1)"
    }
    const divDescriptionStyle = {
        gridColumn: Grid_column_description(props.id),
        gridRow: props.id,
        padding: "3em 7em",
        backgroundColor:"rgba(248, 249, 251, 1)"
    }
    const PictureStyle = {
        width: "100%"
    }
    return (
        <>
            <div style={divDescriptionStyle}>
                <h3>{props.headline}</h3>
                <p>{props.description}</p>
            </div>
            <div style={divPictureStyle}>
                <img src={process.env.PUBLIC_URL + "/image/otherImages/infoLab/" + props.img + ".svg"} style={PictureStyle}></img>
            </div>
        </>
    );
}

export default PictureWithDescription;