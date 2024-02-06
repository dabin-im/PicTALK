import TopBar from "@/components/shared/Topbar.tsx";
import LeftSidebar from "@/components/shared/LeftSidebar.tsx";
import BottomBar from "@/components/shared/Bottombar.tsx";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="w-full md:flex">
      <TopBar />
      <LeftSidebar />
      <section className="flex flex-1 h-full">
        <Outlet />
      </section>
      <BottomBar />
    </div>
  );
};

export default RootLayout;
