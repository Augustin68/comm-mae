import codebare from '../../assets/images/codebarre.png'
import { libraryBooks } from './library-books';
import { Link } from 'react-router-dom';

export function LibraryPage() {
    return (
        <div className="flex bg-pale-100 h-screen sm:p-20 p-5 pl-32 max-w-full justify-center items-center">
            <div className="w-11/12 h-3/4 flex flex-row justify-between items-center gap-8">
                {
                    libraryBooks.map((book, index) => (
                        <Link to={`/library/${book.url}`} key={index}
                            className="py-5 px-3 cursor-pointer flex flex-col drop-shadow-lg hover:drop-shadow-2xl justify-between items-center h-full bg-banana-blue-500 hover:bg-banana-blue-400 hover:translate-y-5  ease-in-out- duration-300 grow w-12"
                        >
                                <p className="writing-vertical-rl m-auto rotate-180 text-pale-100 text-3xl font-bold">{book.title}</p>
                                <img className='w-11/12 h-7 object-contain' src={codebare} alt="" />
                        </Link>
                    ))
                }
                <div></div>
            </div>
        </div>
    )
}