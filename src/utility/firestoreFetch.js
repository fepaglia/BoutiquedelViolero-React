import { db } from "./firebaseConfig";
import { collection, getDocs, query, where, getDoc, doc } from "firebase/firestore"; 

 export const fetchFromFirestore = async(id) =>{
    let q;
    if (id) {
        q = query(collection(db , "products"), where("category", "==", id));
    } else { 
        q = query(collection(db , "products"));
    }
const querySnapshot = await getDocs(q);
const dataFromFirestone = querySnapshot.docs.map(item =>({
    id: item.id,
    ...item.data()
}))
    return(dataFromFirestone)
};

export const fetchOneFromFirestore = async(id) => {
            const docRef = doc(db, "products", id);
            const docSnap = await getDoc(docRef); 

        if (docSnap.exists()) {
            return {
                id,
                ...docSnap.data()
            }
        } else {
        console.log("No such document!");
        }
    };
