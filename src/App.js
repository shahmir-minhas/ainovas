import { Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./Layout/Layout";
import Home from "./Pages/Home/Index";
import Projects from "./Pages/Projects/Index";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/projects" element={<Projects />} />
          <Route path="/" element={<Home />} />
          {/* <Route path="users/*" element={<Users />} /> */}
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
