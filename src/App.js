import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import QRGenerator from "./components/QRGenerator"; // 👈 Import QRGenerator instead

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/generate" element={<QRGenerator />} /> {/* ✅ Correct */}
    </Routes>
  );
}

export default App;
