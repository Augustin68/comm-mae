import { useRef, useEffect } from "react";
import { ChatBubble } from "./chat-bubble";

export function Chat({chatList}) {

    const bottomRef = useRef(null);

    useEffect(() => {
        // 👇️ scroll to bottom every time messages change
        bottomRef.current?.scrollIntoView({behavior: 'smooth'});
      }, [chatList]);

    return (
        <div className="flex flex-col overflow-auto navbar">
            {
                chatList.map((chat, count) => 
                    chat !== null ? <>
                        <ChatBubble key={count} text={chat.text} isUser={chat.isUser} className={chat.isUser ? 'self-start' : 'self-end'}></ChatBubble>
                    </> : null
                )
            }
            <div ref={bottomRef}></div>
        </div>
    )
}