import { Outlet } from "react-router-dom";
import { SideMenu } from "../../components/SideMenu";

export function DefaultLayout() {
  return (
    <>
      <SideMenu />
      <Outlet />
    </>
  )
}