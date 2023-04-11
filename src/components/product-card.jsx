import { useEffect, useState } from "react";
import {ReactComponent as CodeBarre} from '../assets/codebar.svg';

export default function ProductCard({idx, name, description, picture, category}) {

    const [image, setImage] = useState(null)


    useEffect(() => {
        const fetchImage = async () => {
            try {
                const response = await import(`../assets/product-pictures/${picture}`)
                setImage(response.default)
            } catch (err) {
                console.error(err)
            }
        }

        fetchImage()
    }, [picture])

    return (
        <div className="border border-white flex justify-center items-center flex-col gap-4 p-5">
            <img src={image} alt={`Produit: ${picture}`} className="h-96 object-contain"/>
            <div className="bg-white p-4 flex w-3/4 h-48 gap-4">
                <CodeBarre className='text-skin-primary h-full w-1/2 object-cover' />
                <div className="flex justify-between py-5 flex-col items-center">
                    <div className="flex flex-row items-center gap-3 font-inter">
                        <p className="text-4xl text-skin-primary font-bold">#{idx}</p>
                        <p className="text-xl text-skin-primary font-bold">{name}</p>    
                    </div>
                    <p className="text-skin-primary font-rubik">CATEGORIE: {category?.toUpperCase()}</p>
                </div>
            </div>
        </div>
    )
}