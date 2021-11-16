import { Link } from "react-router-dom";

const Products = () => {
    return (
        <section>
            <h1>PRODUCTS PAGE</h1>
            <ul>
                <li><Link to="products/p1">BOOKS</Link></li>
                <li><Link to="products/p2">LAPTOP</Link></li>
                <li><Link to="products/p3">TV</Link></li>
            </ul>
        </section>
    )
}

export default Products;