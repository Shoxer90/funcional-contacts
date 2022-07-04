import React, { useState } from "react";

import { v4 as uuidv4 } from 'uuid';

import DrowImages from "./DrowImages";

import style from "./index.module.scss";


const FileInput = ({avatar, setPhotosToFB}) => {
    const [currentImages, setCurrentImages] = useState([]);

    const onFileLoad = (e) => {
        Array.from(e.target.files).forEach((file) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
               setCurrentImages((currentImages) => [...currentImages, reader.result])
            }      
        });
    };
    
    const handleSetPhotosToFB = (e) => {
        e.preventDefault();
        setPhotosToFB(Array.from(e.target[0].files), avatar);
    };

    return (
        <div className={style.fileLoaderComponent}>
            {currentImages && 
                currentImages.map((item) => (
                    <span key={uuidv4()}>
                        <DrowImages  image={item} style={style} />
                    </span>
                ))
            }
            <span>Drag an image,or load from device</span>
            <form onSubmit={(e)=>handleSetPhotosToFB(e)}>
                <input type="file"
                    multiple
                    className={style.hiddenInputFiles}
                    onDragOver={(e)=>{
                        e.preventDefault()
                        e.stopPropagation()
                    }}
                    onDrop={()=>onFileLoad}
                    onChange={(e)=>onFileLoad(e)}
                />
                <div>
                    <button type="submit">Add photos</button>
                </div>
            </form>
        </div>
    );
};

export default FileInput;
