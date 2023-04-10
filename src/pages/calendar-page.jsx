import { useState } from "react";
import Calendar from "../components/calendar/calendar";

import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';
import { useAuthState } from 'react-firebase-hooks/auth';
import { firebaseApp } from "../firebase";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import CalendarChat from "../components/calendar/calendar-chat";

const auth = getAuth(firebaseApp)
export function CalendarPage() {


    const [selectedDate, setSelectedDate] = useState(null);

    const [user] = useAuthState(auth)

    return (
        <div className='bg-pale-100 h-screen w-screen flex justify-center items-center'>
            <div className="grid grid-rows-2 h-full w-full">
                <div className="border border-black flex justify-center items-center">
                    {user ? 
                        <CalendarChat selectedDate={selectedDate} user={user} />
                        : 
                        <SignIn />
                    }
                    <SignOut />
                </div>
                <div className="border border-black flex justify-center items-center">
                    <Calendar onDateClick={setSelectedDate}></Calendar>
                </div>
            </div>
        </div>
    )
}

export function SignOut() {
    return auth.currentUser && (
        <button onClick={() => auth.signOut()}>Sign Out</button>
    )
}

export function SignIn() {

    const loginWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        
        signInWithPopup(auth, provider);
    }

    return (
        <div className="w-10/12 flex justify-center items-center flex-col">
            <p>Vous devez vous connecter pour ajouter des élements dans le calendrier</p>
            <button onClick={loginWithGoogle}>Se connecter</button>
        </div>
    )
}