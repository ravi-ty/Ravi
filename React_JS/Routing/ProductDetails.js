import { useParams } from "react-router-dom";

const ProductDetails = () => {

    const params = useParams();
    
    return (
        <section>
            <h1>PRODUCT DETAILS</h1>
            {params.productID}
        </section>
    )
}

export default ProductDetails;