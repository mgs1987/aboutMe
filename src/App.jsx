import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
//import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Projects } from "./components/Projects";
import { ContactMe } from "./components/ContactMe";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contactme" element={<ContactMe />} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;
