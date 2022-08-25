import SidebarLayout from "components/layouts/SidebarLayout";
import { Cookies } from "react-cookie";

const cookie = new Cookies();

const HomePage = () => {
  return <SidebarLayout>Home</SidebarLayout>;
};

export default HomePage;
