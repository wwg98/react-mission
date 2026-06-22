import "./App.css";
import ProductInfo from "./components/Card";

function App() {
  const product = {
    name: "무선 키보드",
    price: 39000,
    brand: "EZTECH",
  };

  return <ProductInfo name={product.name} price={product.price} brand={product.brand} />;
}

export default App;
