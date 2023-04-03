import './library-page.css'
import codebare from '../../assets/images/codebarre.png'

export function LibraryPage() {

    const books = [
        "Services",
        "Lieux culturels",
        "Échanges",
        "Jeux",
        "Technologies",
        "Education",
        "Écrits",
        "Professions",
        "Outils",
        "Verbale",
        "Réseaux sociaux",
        "Non verbale",
        "Communication visuelle",
    ]


    return (
        <div className="flex bg-pale-100 h-screen sm:p-20 p-5 pl-32 max-w-full justify-center items-center">
            <div className="w-11/12 h-3/4 flex flex-row justify-between items-center gap-8">
                {
                    books.map((book, index) => (
                        <div key={index} className="py-5 px-3 cursor-pointer flex flex-col drop-shadow-lg hover:drop-shadow-2xl justify-between items-center h-full bg-banana-blue-500 hover:bg-banana-blue-400 hover:translate-y-5  ease-out duration-300 grow w-12">
                            <p className="book-text m-auto rotate-180 text-pale-100 text-3xl font-bold">{book}</p>
                            <img className='w-11/12 h-7' src={codebare} alt="" />
                        </div>
                    ))
                }
                <div></div>
            </div>
        </div>
    )
}