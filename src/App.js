import { Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./Layout/Layout";
import Home from "./Pages/Home/Index";
import Projects from "./Pages/Projects/Index";
import ContactUs from "./Pages/ContactUs/Index";
import About from "./Pages/About/Index";
import Solution from "./Pages/Solution/Index";
import Details from "./Pages/Home/Details";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/solution" element={<Solution />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/details" element={<Details/>} />
          <Route path="/" element={<Home />} />
          {/* <Route path="users/*" element={<Users />} /> */}
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
