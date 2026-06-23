import "./App.css";
import ProductInfo from "./components/Card";
import ProductCard from "./components/ProductCard";

function App() {
  const product = {
    name: "무선 키보드",
    price: 39000,
    brand: "EZTECH",
  };

  const products = [
    { id: 1, name: "무선 키보드", price: 39000, brand: "EZTECH" },
    { id: 2, name: "무선 마우스", price: 29000, brand: "EZTECH" },
    { id: 3, name: "모니터", price: 199000, brand: "EZTECH" },
  ];

  return (
    <>
      <ProductInfo name={product.name} price={product.price} brand={product.brand} />
      <ProductCard data={products} />
    </>
  );
}

export default App;
