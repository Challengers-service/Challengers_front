import axios from "axios";
import JoinPage from "pages/Auth/JoinPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  axios.defaults.baseURL = "https://serverus.net";
  axios.defaults.withCredentials = true;
  axios.interceptors.response.use(
    response => {
      return response;
    },
    error => {
      return Promise.reject(error);
    }
  );
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
