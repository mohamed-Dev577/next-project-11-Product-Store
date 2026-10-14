"use client";

import { useState } from "react";

export default function ProductStorePage() {
    
    const [products, setProducts] = useState([]);
    const [productName, setProductName] = useState("");

    const AddProduct = () => {
        if(productName.trim() === "") return;
        setProducts([...products, productName]);
        setProductName("");
    }

    const RemoveProduct = (id) => {
        const newProducts = products.filter((_, index) => index !== id);
        setProducts(newProducts);
    }

    return(
        <div>
            <h1>Product Store</h1>
            <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            />
            <button onClick={AddProduct}>Add Product</button>
        
        <ul>
            {products.map((product, id) => (
                <li key={id}>
                    {product}
                    <button onClick={() => RemoveProduct(id)}>Remove</button>
                </li>
            ))}
        </ul>
        
        </div>

    )
}