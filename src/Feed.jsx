import React, { useState, useEffect } from 'react'
import './Feed.css'
import CreateIcon from '@mui/icons-material/Create';
import InputOption from "./InputOption";
import Post from "./Post";
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import ArticleIcon from '@mui/icons-material/Article';

import { collection, addDoc, getDocs, serverTimestamp, onSnapshot, orderBy,query } from 'firebase/firestore';
import { db } from './firebase';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import FlipMove from 'react-flip-move';



function Feed() {
    const user=useSelector(selectUser)
    const [input, setInput] = useState('');
    const [posts, setPosts] = useState([]);


    //sending to firestore
    const sendPost = async (e) => {
        e.preventDefault();

        try {
            const docRef = await addDoc(collection(db, "posts"), {
                name:user.displayName,
                description: user.email,
                message: input,
                photoUrl: user.photoUrl || "",
                timestamp: serverTimestamp(),
            });
            setInput('');
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }


    };
    //fetching data from firestore using snapshot for realtime data update
    const fetchPost = async () => {

        const unsubscribe = onSnapshot(
            query(collection(db, "posts"), orderBy('timestamp','desc')),
            (snapshot) => {
                const newData = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data()
                }));
                setPosts(newData);
                console.log(newData);
            });

        // Cleanup the listener when the component unmounts
        return () => {
            unsubscribe();
        };
    }


    useEffect(() => {
        fetchPost();
    }, [])

    return (
        <div className='feed'>
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form action="">
                        <input value={input} onChange={e => setInput(e.target.value)} type="text" />
                        <button onClick={sendPost} type='submit'>send</button>
                    </form>
                </div>
                <div className="feed__inputOptions">

                    <InputOption title="Photo" Icon={ImageIcon} color="#70b5f9" />
                    <InputOption title="Video" Icon={SubscriptionsIcon} color="#E7A33E" />
                    <InputOption title="Event" Icon={EventNoteIcon} color="#c0cbcd" />
                    <InputOption title="Write article" Icon={ArticleIcon} color="#7fc15e" />

                </div>
            </div>
            <FlipMove>
            {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
                <Post
                    key={id}
                    name={name}
                    description={description}
                    message={message}
                    photoUrl={photoUrl} />
                    ))}
            </FlipMove>
          




        </div>
    )
}

export default Feed
