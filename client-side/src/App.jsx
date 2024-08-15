import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import UserDataContext from "./context/context";

// React Toast
import { ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import auth from "./firebase/config";

function App() {
  const [dataLoading, setDataLoading] = useState(true);
  const [userAuthData, setUserAuthData] = useState(null);

  // Auth Change Effect
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user === null || user?.photoURL !== null) {
        setDataLoading(false);
        setUserAuthData(user);
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <>
      <ToastContainer
        position="top-left"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
      <div className="max-w-[1100px] mx-auto space-y-5">
        <UserDataContext.Provider
          value={{ dataLoading, setDataLoading, userAuthData, setUserAuthData }}
        >
          <Navbar />
          <main className="px-4 lg:px-0">
            <Outlet />
          </main>
          <Footer />
        </UserDataContext.Provider>
      </div>
    </>
  );
}

export default App;
