import { useEffect, useState } from "react";
import { Link } from "react-router";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data.products));
  }, []);

  return (
    <>
      <h1>Products</h1>
      <div>
        {products.map((product) => (
          <Link key={product.id} to={`/products/${product.id}`}>
            {product.title}
          </Link>
        ))}
      </div>
    </>
  );
}

export default Products;
