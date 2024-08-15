import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="max-w-[1100px] mx-auto space-y-5">
      <Navbar />
      <main className="px-5">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
