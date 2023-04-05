const localStorageKey = 'chat-auth-token';

const getUserUUID = () => {
    const userUUID = localStorage.getItem(localStorageKey);
    if(userUUID){
        return userUUID;
    }

    const newUUID = crypto.randomUUID();
    localStorage.setItem(localStorageKey, newUUID);
    return newUUID;
}

const isCurrentUserUUID = (userUUID) => {
    return userUUID === getUserUUID();
}

function isCharacterAuthorized(char) {
    if(char.length !== 1) {
        return false;
    }
    const code = char.charCodeAt(0);
    return (code >= 32 && code <= 126) || // basic printable ASCII characters
           (code >= 128 && code <= 255);  // extended ASCII characters (accents, etc.)
  }


const ChatService = {
    getUserUUID,
    isCurrentUserUUID,
    isCharacterAuthorized,
}

export default ChatService;