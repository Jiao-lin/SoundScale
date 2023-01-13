import { addDoc,collection, getFirestore, serverTimestamp } from 'firebase/firestore';

export const GenerarDoc = async () => {
    const db = getFirestore();
    const GetCategory = collection(db,'item');
    const item = {
        artists:"DJ Cronox ft.Lautaro DDJ",
        carrito: false,
        deseado:false,
        creado: serverTimestamp(),
        estilo:"rkt",
        img:"https://i.ytimg.com/vi/A5q98TkuG1Q/maxresdefault.jpg",
        precio: 2569,
        song:"https://www.youtube.com/watch?v=A5q98TkuG1Q",
        title:"Toda Rkt Chill"};
    console.log(item)
    await addDoc(GetCategory, item);
}
