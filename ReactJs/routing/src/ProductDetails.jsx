import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (id > 30) {
    return <h1>No Product Found</h1>;
  }
  return (
    <>
      <h1>Product Details</h1>
      <p>{product.title}</p>
      <p>{product.description}</p>
    </>
  );
}

export default ProductDetails;
