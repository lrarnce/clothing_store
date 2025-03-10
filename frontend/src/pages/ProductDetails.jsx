import { useParams } from "react-router-dom";
import { getProductsById } from "../services/api";
import { useState, useEffect } from "react";

function ProductDetails() {
  const { id } = useParams();
  const [products, setProducts] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProductsById = async () => {
      try {
        const fetchedProductById = await getProductsById(id);
        if (fetchedProductById && fetchedProductById.length !=0 ) {
          setProducts(fetchedProductById); // Set the first product from the array
        } else {
          setError('Product not found');
        }
      } catch (err) {
        console.log(err);
        setError('Failed to load products...');
      }
    };

    loadProductsById();
  }, [id]);

  if (error) return <div>{error}</div>; // Display error message if there's an error
  if (!products) return <div>Loading...</div>; // Display loading message while the product is being fetched

  return (
    <div>
      <h1>{products.name}</h1>
      <p>Price: ${products.price}</p>
      <p>Description: {products.description}</p>
      <button className="cart-btn">Add to Cart</button>
    </div>
  );
}

export default ProductDetails;
