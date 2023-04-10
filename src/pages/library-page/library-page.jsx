
import { libraryBooks } from './library-books';
import { Link } from 'react-router-dom';

import {ReactComponent as CodeBarre} from '../../assets/codebar.svg';

export function LibraryPage() {

    return (
        <div className="flex bg-skin-primary h-screen p-5 pl-32 max-w-full justify-center items-center">
            <div className="w-11/12 h-3/4 flex lg:flex-row flex-col justify-between items-center 2xl:gap-8 xl:gap-5 gap-3 max-lg:overflow-auto">
                {
                    libraryBooks.map((book, index) => (
                        <Link to={`/library/${book.url}`} key={index}
                            className="py-5 px-3 cursor-pointer flex max-lg:w-full lg:flex-col drop-shadow-lg hover:drop-shadow-2xl justify-between items-center lg:h-full bg-skin-secondary hover:bg-skin-secondary-hover hover:translate-y-5  ease-in-out- duration-300 gap-2 border-2 border-white"
                        >
                                <p className="font-manrope lg:writing-vertical-rl lg:m-auto lg:rotate-180 text-skin-primary xl:text-3xl text-xl font-bold">{book.title}</p>
                                <div>
                                    <CodeBarre className='text-skin-primary w-full' />
                                </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}