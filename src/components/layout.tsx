import { Outlet } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";

export default function Layout() {
  return (
    <>
      <Header />
      <main className="min-h-screen container mx-auto">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
