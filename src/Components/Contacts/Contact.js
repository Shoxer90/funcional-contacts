import React, {  useState } from "react";

import { getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";

import { fireStorage } from "../../Config/firebaseInit";
import setPhotosToUserData from "../../Modules/setPhotosToUserData";

import { v4 as uuidv4 } from 'uuid';

import Button from "../Buttons";
import FileInput from "../FileInput.js";
import Avatar from "./Avatar";
import ImageCarret from "./ImageCarret";

import styles from "./index.module.scss"

const Contact = ({
    id,
    avatar,
    lastName,
    imageArr,
    phone,
    email,
    firstName,
    removeContact }) => {
        
    const [showMore, setShowMore] = useState(false);
    const [showDownloader, setShowDownloader] = useState(false);
    const [userPhoto, setUserPhoto] = useState([]);

    const setPhotosToFB = async (fromFileInput) => {
        const arrOfImg = [];
        fromFileInput.map( async (photo) => {
            const  photoId = uuidv4();
            const imageRef = ref(fireStorage, `${id}/ ${photoId}`);
            return uploadBytes(imageRef, photo).then(() => {
                const imageListRef = ref(fireStorage, `${id}/`);
                listAll(imageListRef).then((response) => {
                    let filterData = response.items.filter((item) => item.name === photoId);
                    filterData.map((item) => (
                        getDownloadURL(item).then((uploadPicUrl) => {
                            arrOfImg.push(uploadPicUrl);
                        })
                    ));
                });
            });
        });
        
        setUserPhoto(arrOfImg);
        setPhotosToUserData(userPhoto, id);
    };

    const handleOpenInfo = () => {
        setShowMore(!showMore);
        setShowDownloader(false);
    };

    const handleOpenDownloader = () => setShowDownloader(!showDownloader);

    const deleteContact = () => removeContact(id, avatar);

    return (
        <div key={id} className={styles.contactItem}>
            <Avatar className={styles.avatar} src={avatar} alt={lastName} />
            <div className={styles.contactInfo}>
                <span>{firstName} {lastName}</span>
                <div>Phone: {phone}</div>
                {showMore && 
                    <>
                        <div>Email: {email}</div>
                        {imageArr && <ImageCarret styles={styles} userPhoto={imageArr} />}
                        <Button name={"set my pics"} func={handleOpenDownloader} />
                        <Button name={"go back"} func={handleOpenInfo} />
                        <Button name={"Delete contact"} func={deleteContact} />
                    </>
                }
                {showDownloader && showMore && 
                    <FileInput 
                        id={id} 
                        avatar={avatar} 
                        setPhotosToFB={setPhotosToFB}
                    />
                }
                {!showMore && 
                    <Button name={"see more"} func={handleOpenInfo} />
                }
            </div>  
        </div>
    );
};

export default Contact;
