import './home-page.css';

export function HomePage() {
    return (
        <div className="flex flex-col bg-pale-100 h-screen sm:p-20 p-5 pl-32 max-w-full">
            <div className='grow'>
                <p>Chat</p>
            </div>
            <div className='flex max-lg:flex-col gap-10 justify-between items-center'>
                <div className='flex flex-col gap-9 max-w-full'>
                    <h1 className='lg:text-8xl text-6xl font-aqua font-normal break-words'>communication</h1>
                    <div className='flex gap-7 max-w-6xl max-sm:max-w-full'>
                        <p className='font-aqua lg:text-6xl text-4xl font-normal'>n.f</p>
                        <p className='font-aqua font-normal lg:text-3xl text-2xl break-words'>La communication, c'est l'action de communiquer, de transmettre, d'informer.</p>
                    </div>
                </div>
                <div class="group w-36 h-36 hover:scale-105 ease-in-out duration-200 flex items-center justify-center border border-slate-500 hover:border-slate-600 hover:drop-shadow-lg

 rounded-full  cursor-pointer">
                    <p className='font-rubik font-bold ease-in-out duration-200 text-slate-500 group-hover:text-slate-600 text-xl text-center'>Enter the library</p>
                </div>

            </div>
        </div>
    )
}