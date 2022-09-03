import { Outlet } from "react-router";
import HomeLayout from "../HomeLayout";

const HomeSearchLayout = () => {
  return (
    <HomeLayout>
      <Outlet />
    </HomeLayout>
  );
};
export default HomeSearchLayout;
