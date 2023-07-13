import React, { useContext } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { DarkModeContext } from "../../context/DarkModeContext";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);

  return (
    <div
      className={`flex flex-col ${darkMode ? `bg-slate-800 text-white` : null}`}
    >
      <Navbar />
      <div className="flex w-full">
        <Sidebar />
        <main className="min-h-screen w-full">{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
