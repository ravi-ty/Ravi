import { useParams } from "react-router-dom";
import book from "../images/book.jpg"
import laptop from "../images/laptop.jpg"
import tv from "../images/tv.jpg"

const ProductDetails = () => {

    const params = useParams();
    
    return (
        <section>
            <h1>PRODUCT DETAILS</h1>
            {(params.productID === "p1") && 
            <img src={book} height="200px" width="150px"></img>}
            {(params.productID === "p2") && 
            <img src={laptop} height="200px" width="200px"></img>}
            {(params.productID === "p3") && 
            <img src={tv} height="200px" width="200px"></img>}
        </section>
    )
}

export default ProductDetails;