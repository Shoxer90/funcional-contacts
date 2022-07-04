import React from "react";

import Avatar from "./Avatar";

const ImageCarret = ({styles, userPhoto}) => (
    <div>
        {userPhoto.map((photo) => (
            <Avatar src={photo} className={styles.userImg} alt={new Date()} key ={photo} />
        ))}
    </div>
);

export default ImageCarret;
