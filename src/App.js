import { Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./Layout/Layout";
import Index from "./Pages/Home/Index";

function App() {
  return (
    <div className="App">
      <Layout />
      <Routes>
        <Route path="/" element={<Index />} />
        {/* <Route path="users/*" element={<Users />} /> */}
      </Routes>
    </div>
  );
}

export default App;
