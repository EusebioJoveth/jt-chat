import React, {useState, useContext} from 'react'
import Img from "../img/img.png";
import Attach from "../img/attach.png";
import { ChatContext } from '../context/ChatContext';
import { arrayUnion, doc, Timestamp, updateDoc } from 'firebase/firestore';
import {db,  storage} from "../firebase";
import {v4 as uuid} from "uuid";
import {getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';

function Input() {

  const [text, setText] = useState("");
  const [img, setImg] = useState(null);

  const { currentUser } = useContext(ChatContext);
  const {data} = useContext(ChatContext);

  const handleSend = async() =>{

    if(img){
      const storageRef = ref (storage, uuid());
      const uploadTask = uploadBytesResumable(storageRef, img);

      uploadTask.on(
        (error) =>{

        },

        () =>{
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) =>{
            await updateDoc(doc(db, "chats", data.chatId), {
              messages: arrayUnion({
                id: uuid(),
                text,
                senderId: currentUser.uid,
                date: Timestamp.now(),
                img: downloadURL
              })
            });
          });
        }
      );

    }else{
      await updateDoc(doc(db, "chats", data.chatId), {
        messages: arrayUnion({
          id: uuid,
          text,
          senderId: currentUser.uid,
          date: Timestamp.now(),
        })
      });
    }

  }

  return (
    <div className='input'>
      <input type="text" placeholder="Ecrever uma menssagen" 
      onChange={e=> setText(e.target.value)}/>
      <div className="send">
        <img src={Attach} alt="" />
        <input type="file" style={{display: "none"}} id="file"
        onChange={e=>setImg(e.target.files[0])}/>
        <label htmlFor='file'>
          <img src={Img} alt="" />
        </label>
        <button onClick={handleSend}>Enviar</button>
      </div>
    </div>
  )
}

export default Input