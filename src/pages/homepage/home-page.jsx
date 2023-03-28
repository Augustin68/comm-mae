import { useEffect, useState } from 'react';
import { Chat } from '../../components/chat';
import './home-page.css';

export const HomePage = () => {

    const [chatList, setChatList] = useState([
        {
            text: "Chat numéro 1 j'explose de rire a tes souhaits",
            isUser: true,
            isTyping: false,
        },
        {
            text: "Chat numéro 2 j'explose de rire a tes souhaits",
            isUser: false,
            isTyping: false,
        },
        {
            text: "Chat numéro 3 j'explose de rire a tes souhaits",
            isUser: true,
            isTyping: false,
        },
    ]);

    const [nextChat, setNextChat] = useState("");

    useEffect(() => {
        const handleKeyPress = (e) => {
            if (e.key === 'Enter' && nextChat !== '') {
                setChatList((prevChatList) => [
                    ...prevChatList,
                    { text: nextChat, isUser: true, isTyping: false },
                ]);
                setNextChat('');
                return;
            }

            setNextChat((prevNextChat) => prevNextChat + e.key);
        };

        document.addEventListener('keypress', handleKeyPress);

        // Clean up the event listener when the component is unmounted or updated
        return () => {
            document.removeEventListener('keypress', handleKeyPress);
        };
    }, [nextChat]);


    return (
        <div className="flex flex-col bg-pale-100 h-screen sm:p-20 p-5 pl-32 max-w-full justify-between">
            <Chat chatList={chatList}></Chat>
            <div className='flex max-lg:flex-col gap-10 justify-between items-center'>
                <div className='flex flex-col gap-9 max-w-full'>
                    <h1 className='lg:text-8xl text-6xl font-aqua font-normal break-all'>communication</h1>
                    <div className='flex gap-7 max-w-6xl max-sm:max-w-full'>
                        <p className='font-aqua lg:text-6xl text-4xl font-normal'>n.f</p>
                        <p className='font-aqua font-normal lg:text-3xl text-2xl break-words'>La communication, c'est l'action de communiquer, de transmettre, d'informer.</p>
                    </div>
                </div>
                <div className="group w-36 h-36 hover:scale-105 ease-in-out duration-200 flex items-center justify-center border border-slate-500 hover:border-slate-600 hover:drop-shadow-lg

 rounded-full  cursor-pointer shrink-0">
                    <p className='font-rubik font-bold ease-in-out duration-200 text-slate-500 group-hover:text-slate-600 text-xl text-center'>Enter the library</p>
                </div>

            </div>
        </div>
    )
}