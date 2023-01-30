import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import LandingPage from "./components/screens/landingPage/LandingPage";
import MyNotes from "./components/screens/mynotes/MyNotes";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/mynotes" element={<MyNotes />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
