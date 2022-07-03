import React from "react";

import Avatar from "./Avatar";

const ImageCarret = ({styles, userPhoto}) => {
    return (
        <>
            {userPhoto.map((photo) => (
                <Avatar src={photo} className={styles.userImg} alt={new Date()} key ={photo}/>
            ))}
        </>
    );
};

export default ImageCarret;
