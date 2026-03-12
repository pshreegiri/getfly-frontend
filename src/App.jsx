import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Projects from "./components/Projects";
import DPRForm from "./components/DPRForm";

function App() {
  return (

    <div>

    {/* Background shapes */}

      <div className="background-shapes">
        <div className="shape shape1"></div>
        <div className="shape shape2"></div>
        <div className="shape shape3"></div>
      </div>

    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Login />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/dpr/:id" element={<DPRForm />} />

      </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;