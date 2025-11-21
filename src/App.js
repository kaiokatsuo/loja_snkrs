import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductList from "./components/ProductList";
import ProductPage from "./pages/ProductPage";

function App() {
  return (
    <div className="app-root">
      <Header />

      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/produtos" element={<ProductList />} />
        <Route path="/produto/:id" element={<ProductPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
