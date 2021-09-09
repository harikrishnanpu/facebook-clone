import { Avatar } from '@material-ui/core'
import React, { useState } from 'react'
import "./MessageSender.css"
import VideocamIcon from '@material-ui/icons/Videocam'
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'
import { useStateValue } from './StateProvider'
import db from './Firebase'
import firebase from 'firebase'
import Alert from '@material-ui/lab/Alert'


function MessageSender() {
    const [{user},dispatch] = useStateValue();
    const [input, setInput] = useState('');
    const [imageUrl,setImageUrl] = useState('');
    const [error,setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setError("");

        if(input === "" || null || undefined){
            setError("Add Any Input Value")
        }else{

        db.collection('posts').add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic: user.photoURL,
            username: user.displayName,
            image: imageUrl
        })
    }

        setInput("");
        setImageUrl("");


    }
    return (
        <div className="messageSender">
           {error ?  <Alert severity="error">{error}</Alert> : ""}
            <div className="messageSender__top">
                <Avatar src={user.photoURL} />
                <form>
                    <input value={input} onChange={(e)=> setInput(e.target.value)} type="text" placeholder={`What's on your mind , ${user.displayName} ?`}  />
                    <input value={imageUrl} onChange={(e)=> setImageUrl(e.target.value)} type="text" placeholder="Image URL (Optional)" />
                    <button onClick={handleSubmit} type="submit">Hidden Submit</button>
                </form>
            </div>

            <div className="messageSender__bottom">
                <div className="messageSender__option">
                    <VideocamIcon style={{ color: 'red' }} />
                    <h3>Live Video</h3>
                </div>

                <div className="messageSender__option">
                    <PhotoLibraryIcon style={{ color: 'green' }} />
                    <h3>Photo/Video</h3>
                </div>

                <div className="messageSender__option">
                    <InsertEmoticonIcon style={{ color: 'orange' }} />
                    <h3>Activity</h3>
                </div>
            </div>
        </div>
    )
}

export default MessageSender
