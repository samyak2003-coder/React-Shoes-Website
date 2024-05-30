import { useParams } from "react-router-dom"
import Nav2 from "./Navigation/Nav2"
import products from "./db/data";

function ProductView(){
    const { productTitle } = useParams()
    const product = products.find((p) => p.title === productTitle);

    if (!product) {
        return <div>Product not found</div>;
    }
    return(
        <>
            <Nav2 />
            <div className="product-details">
                <h1>{product.title}</h1>
                <img src={product.img} alt={product.title} />
                <p>{product.description}</p>
                <p>Price: ${product.newPrice}</p>
                <p>Company: {product.company}</p>
                <p>Color: {product.color}</p>
                <p>Category: {product.category}</p>
            </div>
        </>
    )
}

export default ProductView