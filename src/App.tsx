import JoinPage from "pages/Auth/JoinPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="auth">
          <Route path="join" element={<JoinPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
