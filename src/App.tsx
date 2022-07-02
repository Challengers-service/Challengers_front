import axios from "axios";
import JoinPage from "pages/Auth/JoinPage";
import LoginPage from "pages/Auth/LoginPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { tokenAtom } from "stores/auth";

function App() {
  const getToken = useRecoilValue(tokenAtom);
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
        <Route path="auth">
          <Route path="join" element={<JoinPage />} />
          <Route path="login" element={<LoginPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
