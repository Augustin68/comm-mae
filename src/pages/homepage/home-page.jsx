import { Link } from 'react-router-dom';
import { Chat } from '../../components/chat/chat';


export const HomePage = () => {

    return (
        <div className="flex flex-col bg-skin-secondary h-screen sm:p-20 p-5 pl-32 max-w-full justify-between">
            <Chat></Chat>
            <div className='flex max-lg:flex-col gap-10 justify-between items-center'>
                <div className='flex flex-col gap-9 max-w-full'>
                    <h1 className='lg:text-8xl text-skin-base text-6xl font-aqua font-normal break-all'>communication</h1>
                    <div className='flex gap-7 max-w-6xl max-sm:max-w-full'>
                        <p className='font-aqua text-skin-base lg:text-6xl text-4xl font-normal'>n.f</p>
                        <p className='font-aqua text-skin-base font-normal lg:text-3xl text-2xl break-words'>La communication, c'est l'action de communiquer, de transmettre, d'informer.</p>
                    </div>
                </div>
                <Link to={"/library"} className="group w-36 h-36 hover:scale-105 ease-in-out duration-200 flex items-center justify-center border border-skin-primary hover:border-skin-primary-hover hover:drop-shadow-lg
 rounded-full  cursor-pointer shrink-0">
                    <p className='font-rubik font-bold ease-in-out duration-200 text-skin-base group-hover:text-skin-base-hover text-xl text-center'>Enter the library</p>
                </Link>

            </div>
        </div>
    )
}