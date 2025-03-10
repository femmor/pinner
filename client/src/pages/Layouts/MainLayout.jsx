import { Outlet } from "react-router";
import { LeftBar, TopBar } from "../../components";
import "./MainLayout.css";

const MainLayout = () => {
  return (
    <div className='main-layout'>
    <LeftBar />
    <div className="content">
      <TopBar />
      <Outlet />
    </div>
  </div>
  )
}
export default MainLayout