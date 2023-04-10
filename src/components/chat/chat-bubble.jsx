import ColorService from "../../services/color.service";

export function ChatBubble({text, isUser, isTyping, userUUID}) {
  return (
    <div className={`flex p-2 ${isUser &&!isTyping ? 'self-end' : 'self-start'} ${isTyping ? 'self-end' : null}`}>
        <div className={`flex flex-col gap-1`}>
            <div className={`border border-skin-primary rounded-tl-2xl h-full w-3 border-r-0 ${isTyping ? 'border-slate-400' : null}`}></div>
            <div className={
                `border border-skin-primary h-full w-3 border-r-0 
                ${!isUser && !isTyping ? 'rounded-tl-2xl' : 'rounded-bl-2xl'}
                ${isTyping ? 'border-slate-400' : null}
                `}
                style={!isUser ? {backgroundColor: userUUID && ColorService.uuidToColor(userUUID)} : null}
            ></div>
        </div>
        <div className={`border border-skin-primary p-2 m-0 relative ${isTyping ? 'border-slate-400' : null}`}>
            <p className={`text-${isUser ? 'end' : 'start'} text-skin-base break-words font-manrope text-2xl ${isTyping ? 'text-slate-400' : null}`}>{text}</p>
        </div>
        <div className="flex flex-col gap-1">
            <div className={`border border-skin-primary rounded-tr-2xl h-full w-3 border-l-0 ${isTyping ? 'border-slate-400' : null}`}></div>
            <div className={`border border-skin-primary h-full w-3 border-l-0
                ${isUser ? 'rounded-tr-2xl ' : 'rounded-br-2xl '}
                ${isTyping ? 'border-slate-400' : null}
                `}
                style={isUser ? {backgroundColor: userUUID && ColorService.uuidToColor(userUUID)} : null}
            ></div>
        </div>
    </div>
  );
}
