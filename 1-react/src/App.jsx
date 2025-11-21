import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import Home from "./pages/Home.jsx";
import ProductDetails from "./ProductDetails.jsx";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
