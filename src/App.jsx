import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Projects from "./components/Projects";
import DPRForm from "./components/DPRForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Login />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/dpr/:id" element={<DPRForm />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;