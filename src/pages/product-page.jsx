import { productData } from "../assets/product-data";
import ProductCard from "../components/product-card";

export function ProductPage({category}) {
    console.log("category: ", productData.map(product => product.category))
    return (
        <div className="w-screen h-screen bg-skin-primary">
            <div className="grid grid-cols-2 h-full overflow-auto p-16">
                {
                    productData.filter((product) => product.category === category).map((product, index) => (
                        <ProductCard 
                            key={index}
                            idx={index}
                            name={product.name}
                            description={product.description}
                            picture={product.picture}
                            category={product.category}
                        />
                    ))
                }
            </div>
        </div>
    )
}