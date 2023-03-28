export function ChatBubble({text, isUser, isTyping}) {
  return (
    <div className={`flex p-2 ${isUser ? 'self-end' : 'self-start'}`}>
        <div className="flex flex-col gap-1">
            <div className="border border-black rounded-tl-2xl h-full w-3 border-r-0"></div>
            <div className="border border-black rounded-bl-2xl h-full w-3 border-r-0"></div>
        </div>
        <div className="border border-black p-2 m-0 relative">
            <p className={`text-${isUser ? 'end' : 'start'} font-manrope text-2xl`}>{text}</p>
            {/* {
                isUser ? (
                    <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 rotate-45 w-2 h-2 bg-indigo-400"></div>
                )
                : (
                    <div className="absolute left-0 top-1/2 transform -translate-x-1/2 rotate-45 w-2 h-2 bg-indigo-400"></div>
                )
            } */}
        </div>
        <div className="flex flex-col gap-1">
            <div className="border border-black rounded-tr-2xl h-full w-3 border-l-0"></div>
            <div className="border border-black rounded-br-2xl h-full w-3 border-l-0"></div>
        </div>
    </div>
  );
}
