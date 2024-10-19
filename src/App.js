import "./App.css";
import Arjs from "./components/ar";
import FileUpload from "./components/form-upload/upload";
import Change3d from "./components/form-upload/change3d";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route  path="/" element={<FileUpload />} />
        <Route  path="/home" element={<Arjs />} />
        <Route  path="/model/:id" element={<Change3d />} />
      </Routes>
    </Router>
  );
}

export default App;
