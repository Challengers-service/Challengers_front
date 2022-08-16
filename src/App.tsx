import axios from "axios";
import JoinPage from "pages/Auth/JoinPage";
import LoginPage from "pages/Auth/LoginPage";
import HomePage from "pages/Home/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { accessTokenAtom } from "stores/auth";

function App() {
  const getToken = useRecoilValue(accessTokenAtom);
  console.log(getToken);
  axios.defaults.baseURL = "https://serverus.net";
  axios.defaults.headers.common["Authorization"] = getToken;
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
        <Route path="/" element={<HomePage />} />
        <Route path="/join" element={<JoinPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
