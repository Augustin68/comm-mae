import { addDoc, collection, getFirestore, limit, orderBy, query, serverTimestamp } from "firebase/firestore";
import { useCollection } from 'react-firebase-hooks/firestore';
import { firebaseApp } from "../../firebase";
import { useEffect, useRef, useState } from "react";
import ChatService from "../../services/chat-auth.service";

export default function CalendarChat({ selectedDate }) {
    const db = getFirestore(firebaseApp);

    const [messageRef, setMessageRef] = useState(null);

    const [queryRef, setQueryRef] = useState(null);

    const chatBottom = useRef(null);

    useEffect(() => {
        const newMessageRef = collection(db, `calendar-chat-${selectedDate}-12-23`)
        setMessageRef(newMessageRef);
        console.log("date changed")
    }, [selectedDate, db]);

    useEffect(() => {
        if (!messageRef) return;
        const newQueryRef = query(messageRef, orderBy("createdAt", "asc"), limit(25));
        setQueryRef(newQueryRef);
        console.log("date changed 2")
    }, [messageRef])


    const [messages] = useCollection(queryRef, {idField: "id"});

    useEffect(() => {
        chatBottom?.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages])

    const [chatValue, setChatValue] = useState('');

    const sendChat = async (e) => {
        e.preventDefault();
        if(chatValue === '') return;
        if(!selectedDate) return;

        const payload = {text: chatValue, createdAt: serverTimestamp(), uuid: ChatService.getUserUUID()}
        setChatValue('');
        await addDoc(messageRef, payload);
    }

    return (
        <div className="w-full h-full flex flex-col justify-between items-center p-10 font-helvetica">
            <div className="w-full flex justify-between items-stretch">
               {
                    selectedDate
                    ?  
                    <div className="flex grow items-center gap-4">
                        <p className="font-bold text-4xl">Décembre</p>
                        <div className="h-full border border-black"></div>
                        <p className=" font-bold text-8xl">{selectedDate}</p>
                    </div>
                    :
                    <p className="font-bold text-4xl mr-10">Sélectionnez une date</p>
               }
                <form className="grow-[10] gap-3 flex flex-col items-end mt-10" onSubmit={(e) => sendChat(e)}>
                    <input rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Write your thoughts here..."
                        value={chatValue} onChange={(e) => setChatValue(e.target.value)} 
                    ></input>
                    <button type="submit" className="px-5 mr-2 h-fit mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-2xl border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:ring-4 focus:ring-gray-200"
                        disabled={!selectedDate}
                        onClick={(e) => sendChat(e)}
                    >Envoyer</button>
                </form>
            </div>
           {
                selectedDate 
                ? 
                <div className="w-full h-3/4 overflow-auto">
                    {messages && messages.docs.map((message) => (
                        <div key={message.id}>
                            <p className="text-xl"> - {message.data().text}</p>
                        </div>
                    ))}
                    <div ref={chatBottom}></div>
                </div>
                : null
           }
        </div>
    )
}
