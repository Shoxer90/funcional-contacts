import React from "react";

const Avatar = ({src,className,alt}) => {
    return (
        <img className={className} src={src} alt={alt}/>
    );
};

export default Avatar;