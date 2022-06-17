import HomePage from "./pages/HomePage";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import MainHeader from "./components/MainHeader";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Routes>
          <Route path="/" element={<Navigate replace to="/homepage" />} />
          <Route path="/homepage/*" element={<HomePage />}>
            <Route path="new-user" element={<p>Welcome, new user!</p>} />
          </Route>
          <Route path="/products" element={<Products />} />
          <Route path="/products/:productId" element={<ProductDetail />} />
        </Routes>
      </main>
    </div>
  );
}
export default App;

// our-domain.com/welcome => Welcome Component
// our-domain.com/products => Products Component
// our-domain.com/product-detail/a-book
