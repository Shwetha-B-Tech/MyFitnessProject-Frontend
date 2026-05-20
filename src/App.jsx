import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "./Components/LoginPage";
import RegisterPage from "./Components/RegisterPage";
import HomePage from "./Components/HomePage";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<RegisterPage />}
        />

        <Route
          path="/login"
          element={<LoginPage />}
        />

        <Route
          path="/home"
          element={<HomePage />}
        />

      </Routes>

    </BrowserRouter>

  );
}

export default App;