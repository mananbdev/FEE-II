import "./App.css";

function ProductCard({ product }) {
  return (
    <div className="card">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <h3>₹{product.price}</h3>
      <button>Add to Cart</button>
    </div>
  );
}

function App() {
  const products = [
    {
      id: 1,
      name: "Laptop",
      description: "Powerful laptop for everyday use",
      price: 59999,
      image: "https://picsum.photos/300/200?random=1",
    },
    {
      id: 2,
      name: "Smartphone",
      description: "Latest smartphone with great camera",
      price: 29999,
      image: "https://picsum.photos/300/200?random=2",
    },
    {
      id: 3,
      name: "Headphones",
      description: "Wireless noise cancelling headphones",
      price: 4999,
      image: "https://picsum.photos/300/200?random=3",
    },
    {
      id: 4,
      name: "Keyboard",
      description: "Mechanical RGB keyboard",
      price: 2999,
      image: "https://picsum.photos/300/200?random=4",
    },
    {
      id: 5,
      name: "Mouse",
      description: "Wireless gaming mouse",
      price: 1499,
      image: "https://picsum.photos/300/200?random=5",
    },
    {
      id: 6,
      name: "Monitor",
      description: "27 inch Full HD monitor",
      price: 15999,
      image: "https://picsum.photos/300/200?random=6",
    },
    {
      id: 7,
      name: "Smart Watch",
      description: "Smart watch with fitness tracking",
      price: 3999,
      image: "https://picsum.photos/300/200?random=7",
    },
    {
      id: 8,
      name: "Speaker",
      description: "Portable Bluetooth speaker",
      price: 2499,
      image: "https://picsum.photos/300/200?random=8",
    },
    {
      id: 9,
      name: "Tablet",
      description: "Lightweight tablet for entertainment",
      price: 19999,
      image: "https://picsum.photos/300/200?random=9",
    },
    {
      id: 10,
      name: "Gaming Chair",
      description: "Comfortable gaming chair",
      price: 12999,
      image: "https://picsum.photos/300/200?random=10",
    },
  ];

  return (
    <div className="container">
      <h1 className="heading">Products</h1>
      <div className="products">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default App;
