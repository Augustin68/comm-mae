import { useRef, useEffect, useState } from "react";
import { ChatBubble } from "./chat-bubble";
import { getDatabase, onValue, ref, set } from "firebase/database";
import {firebaseApp} from '../../firebase';
import chatService from "../../services/chat-auth.service";

export function Chat() {

    const bottomRef = useRef(null);

    const [chatList, setChatList] = useState([
        {
            text: "Bonjour, comment allez vous ?",
            isUser: true,
            isTyping: false,
        }
    ]);
    const [nextChat, setNextChat] = useState('');

    
    useEffect(() => {
        const db = getDatabase(firebaseApp);
        const chatRef = ref(db, 'chat');
        onValue(chatRef, (snapshot) => {
            const data = snapshot.val();
            setChatList((prevChatList) => [...prevChatList, {
                ...data,
                isUser: chatService.isCurrentUserUUID(data.userUUID),
            }]);
        });
    }, []);

    useEffect(() => {
        const db = getDatabase(firebaseApp);

        const handleKeyPress = (e) => {

            if (e.key === 'Enter') {
                if(nextChat === '') return;
                
                const newMessage = {text: nextChat, userUUID: chatService.getUserUUID()};
                setNextChat('');
                set(ref(db, 'chat'), newMessage);
                return;
            }

            if(e.key === 'Backspace') {
                setNextChat((prevNextChat) => prevNextChat.slice(0, -1));
                return;
            }

            if(!chatService.isCharacterAuthorized(e.key) || nextChat.length >= 125) return
    
            setNextChat((prevNextChat) => prevNextChat + e.key);
        };

        document.addEventListener('keydown', handleKeyPress);
        return () => {
            document.removeEventListener('keydown', handleKeyPress);
        };
    }, [nextChat]);

    useEffect(() => {
        // 👇️ scroll to bottom every time chatList change
        bottomRef.current?.scrollIntoView({behavior: 'smooth'});
      }, [chatList, nextChat]);

    return (
            <div className="flex flex-col overflow-auto navbar">
                {
                    chatList.map((chat, count) => 
                        chat !== null ? 
                            <ChatBubble key={count} text={chat.text} isUser={chat.isUser} userUUID={chat.userUUID} className={chat.isUser ? 'self-start' : 'self-end'}></ChatBubble>
                        : null
                    )
                }
                {
                    nextChat ? 
                        <ChatBubble isTyping={true} text={nextChat}></ChatBubble>
                    : <p className="italic font-manrope self-end mt-4 text-slate-500">Commencez à écrire puis appuyez sur Entrer pour communiquer</p>
                }
                <div ref={bottomRef}></div>
            </div>
    )
}