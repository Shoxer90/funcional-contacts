import React, { useState } from "react";

import { v4 as uuidv4 } from 'uuid';

import DrowImages from "./DrowImages";

import style from "./index.module.scss";


const FileInput = () => {
 const [currentImages, setCurrentImages] = useState([]);

 console.log(currentImages)
    const onFileLoad = () => {

    };
    
    return (
        <div className={style.fileLoader}>
            <div>Drag an image,or load from device</div>
            <input type="file"
                multiple
                className={style.hiddenInputFiles}
                onDragOver={(e=>{
                    e.preventDefault()
                    e.stopPropagation()
                })}
                onDrop={()=> onFileLoad}
                onChange={(e)=> setCurrentImages([...currentImages,e.target?.files[0]?.name])}

            />
            <div className={style.formButton}></div>
            {currentImages && 
                currentImages.map((item) =>(
                    <div key={uuidv4()}>
                        <DrowImages  image={item}/>
                    </div>
            ))}
        </div>
    );
};

export default FileInput;