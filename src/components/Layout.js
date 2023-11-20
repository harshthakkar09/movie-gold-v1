import { Outlet } from "react-router"; 

import React from "react";

const Layout = () => {
    return (
      <main>
        <Outlet />
      </main>
    )
}

export default Layout;
