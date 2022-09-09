import axios from "axios";
import CreateChallengeLayout from "components/layouts/CreateChallengeLayout";
import HomeSearchLayout from "components/layouts/HomeSearchLayout";
import HomeWithTabLayout from "components/layouts/HomeWithTabLayout";
import JoinPage from "pages/Auth/JoinPage";
import LoginPage from "pages/Auth/LoginPage";
import StepFinishPage from "pages/Challenge/CreateChallenge/stepFinishPage";
import StepOnePage from "pages/Challenge/CreateChallenge/StepOnePage";
import StepThreePage from "pages/Challenge/CreateChallenge/StepThreePage";
import StepTwoPage from "pages/Challenge/CreateChallenge/StepTwoPage";
import HomeNewChallengePage from "pages/Home/HomeNewChallengePage";
import HomePage from "pages/Home/HomePage";
import HomeSearchPage from "pages/Home/HomeSearchPage";
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
        <Route path="/" element={<HomeWithTabLayout />}>
          <Route path="" element={<HomePage />} />
          <Route path="new" element={<HomeNewChallengePage />} />
        </Route>
        <Route path="/search" element={<HomeSearchLayout />}>
          <Route path="" element={<HomeSearchPage />} />
        </Route>
        <Route path="/join" element={<JoinPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/create-challenge" element={<CreateChallengeLayout />}>
          <Route path="one" element={<StepOnePage />} />
          <Route path="two" element={<StepTwoPage />} />
          <Route path="three" element={<StepThreePage />} />
          <Route path="finish" element={<StepFinishPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
