import { useEffect, useState } from "react";

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
        <div className="border border-white">
            <img src={image} alt={`Produit: ${picture}`} className="w-52 object-contain"/>
            <p>{idx}</p>
            <p>{name}</p>
        </div>
    )
}