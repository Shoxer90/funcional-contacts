import { deleteObject, getMetadata, listAll, ref } from "firebase/storage";
import { fireStorage } from "../Config/firebaseInit";

const deleteStorageIMGS = (phototype, id) => {
    let imageListRef = []
    if (phototype === "coll") {
        imageListRef = ref(fireStorage, `${id}/`);
    }else if (phototype === "avatar") {
        imageListRef = ref(fireStorage, `contactAvatars/${id}`);
    }
    listAll(imageListRef).then((response) => {
        console.log(response.items, "responseItems")
        response.items.forEach((img) => {
            getMetadata(img).then((picName) => {
                const imageRef = ref(fireStorage, `${id}/${[picName.name]}`);
                deleteObject(imageRef)
            })
        })
    });
};

export default deleteStorageIMGS;