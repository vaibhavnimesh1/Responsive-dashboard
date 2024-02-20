import Left from "./Left";
import "./style.css";
import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./Contact";
import About from "./About";
import Details from "./Details.jsx";
import More from "./More";
import Logout from "./Login.jsx";
import Footer from "./footer.jsx";

const Dashboard = () => {
  return (
    <BrowserRouter>
      <div className="dashboard">
        <Left />
        <div className="right">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/details" element={<Details />} />
            <Route path="/more" element={<More />} />
            <Route path="/logout" element={<Logout />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default Dashboard;
