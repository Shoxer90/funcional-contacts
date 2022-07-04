import React from "react";

const DrowImages = ({image, style}) => (
    <img className={style.imageAploader} src={image} alt={new Date()}/>
);

export default DrowImages;
