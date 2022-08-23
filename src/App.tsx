import axios from "axios";
import CreateChallengeLayout from "components/layouts/CreateChallengeLayout";
import JoinPage from "pages/Auth/JoinPage";
import LoginPage from "pages/Auth/LoginPage";
import StepOnePage from "pages/CreateChallenge/StepOnePage";
import StepThreePage from "pages/CreateChallenge/StepThreePage";
import StepTwoPage from "pages/CreateChallenge/StepTwoPage";
import HomePage from "pages/Home/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { accessTokenAtom } from "stores/auth";

function App() {
  const accessToken = useRecoilValue(accessTokenAtom);
  axios.defaults.baseURL = "https://serverus.net";
  axios.defaults.headers.common["Authorization"] = accessToken;
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
        <Route path="/create-challenge" element={<CreateChallengeLayout />}>
          <Route path="one" element={<StepOnePage />} />
          <Route path="two" element={<StepTwoPage />} />
          <Route path="three" element={<StepThreePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
