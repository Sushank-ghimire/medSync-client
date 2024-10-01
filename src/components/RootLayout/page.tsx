import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "../Export";

const RootLayout = () => {
  return (
    <main>
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
};

export default RootLayout;
