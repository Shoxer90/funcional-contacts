import React from "react";

const DrowImages = ({image,style}) => {
    return (
        <img  className={style.imageAploader}src={image} alt={new Date()} />
    );
};

export default DrowImages;