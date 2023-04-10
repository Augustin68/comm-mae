import { addDoc, collection, getFirestore, limit, orderBy, query, serverTimestamp } from "firebase/firestore";
import { useCollection } from 'react-firebase-hooks/firestore';
import { firebaseApp } from "../../firebase";
import { useEffect, useState } from "react";

export default function CalendarChat({selectedDate, user}) {
    const db = getFirestore(firebaseApp);

    const [messageRef, setMessageRef] = useState(null);

    const [queryRef, setQueryRef] = useState(null);

    useEffect(() => {
        const newMessageRef = collection(db, `calendar-chat-${selectedDate}-12-23`)
        setMessageRef(newMessageRef);
        console.log("date changed")
    }, [selectedDate, db]);

    useEffect(() => {
        if (!messageRef) return;
        const newQueryRef = query(messageRef, orderBy("createdAt", "desc"), limit(25));
        setQueryRef(newQueryRef);
        console.log("date changed 2")
    }, [messageRef])


    const [messages] = useCollection(queryRef, {idField: "id"});

    const [chatValue, setChatValue] = useState('');

    const sendChat = async (e) => {
        e.preventDefault();
        const payload = {text: chatValue, createdAt: serverTimestamp(), uid: user.uid}
        setChatValue('');
        await addDoc(messageRef, payload);
    }

    return (
        <div className="w-full h-full flex flex-col justify-between items-center p-5">
            <div className="w-full flex justify-between items-stretch">
                <p className="grow">{selectedDate}</p>
                <form className="grow flex justify-end">
                    <textarea rows="4" className="w-4/6 rounded-lg border-white" type="text" placeholder="Message" value={chatValue} onChange={(e) => setChatValue(e.target.value)} />
                    <button type="submit" onClick={(e) => sendChat(e)}>Envoyer</button>
                </form>
            </div>
            <div className="w-full h-3/4 overflow-auto">
                {messages && messages.docs.map((message) => (
                    <div key={message.id}>
                        <p>{message.data().text}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
