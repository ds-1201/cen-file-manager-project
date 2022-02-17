import DashboardMain from "components/DashboardMain/DashboardMain";
import Sidebar from "components/Sidebar/Sidebar";
import React, { useState } from "react";

const MainPage = () => {
  const [sidebarWidth, setSidebarWidth] = useState(350);
  return (
    <>
      <Sidebar sidebarWidth={sidebarWidth} setSidebarWidth={setSidebarWidth} />
      <DashboardMain sidebarWidth={sidebarWidth} />
    </>
  );
};

export default MainPage;
