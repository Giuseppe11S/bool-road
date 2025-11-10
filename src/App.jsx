import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import pages
import HomePage from "./pages/HomePage";
import SingoloViaggio from "./pages/SingoloViaggio";

// Default Layout
import DefaultLayout from "./layouts/DefaultLayout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/:id" element={<SingoloViaggio />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
