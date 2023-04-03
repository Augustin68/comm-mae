import codebare from '../../assets/images/codebarre.png'
import { libraryBooks } from './library-books';
import { Link } from 'react-router-dom';

export function LibraryPage() {
    return (
        <div className="flex bg-pale-100 h-screen p-5 pl-32 max-w-full justify-center items-center">
            <div className="w-11/12 h-3/4 flex lg:flex-row flex-col justify-between items-center 2xl:gap-8 xl:gap-5 gap-3 max-lg:overflow-auto">
                {
                    libraryBooks.map((book, index) => (
                        <Link to={`/library/${book.url}`} key={index}
                            className="py-5 px-3 cursor-pointer flex max-lg:w-full lg:flex-col drop-shadow-lg hover:drop-shadow-2xl justify-between items-center lg:h-full bg-banana-blue-500 hover:bg-banana-blue-400 hover:translate-y-5  ease-in-out- duration-300 gap-2 border-2 border-white"
                        >
                                <p className="font-manrope lg:writing-vertical-rl lg:m-auto lg:rotate-180 text-pale-100 xl:text-3xl text-xl font-bold">{book.title}</p>
                                <img className='lg:w-11/12 h-7 object-contain' src={codebare} alt="codebare" />
                        </Link>
                    ))
                }
                <div></div>
            </div>
        </div>
    )
}