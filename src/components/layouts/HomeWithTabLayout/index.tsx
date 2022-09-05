import Tab from "components/home/Tab";
import { Outlet } from "react-router";
import HomeLayout from "../HomeLayout";

const HomeWithTabLayout = () => {
  return (
    <HomeLayout>
      <Tab />
      <Outlet />
    </HomeLayout>
  );
};

export default HomeWithTabLayout;
