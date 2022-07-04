import React, { memo } from "react";

const Avatar = ({src,className,alt}) => (<img className={className} src={src} alt={alt}/>);

export default memo(Avatar);
