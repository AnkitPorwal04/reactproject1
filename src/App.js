import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import Services from "./Components/Services";

import "./Styles/App.scss";
import "./Styles/header.scss";
import "./Styles/home.scss";
import "./Styles/footer.scss";
import "./Styles/contact.scss";
import "./Styles/mediaquery.scss";

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/services" element={<Services/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
