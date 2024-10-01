import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RootLayout } from "./components/Export";
import {
  About,
  Appointments,
  Doctors,
  Home,
  Login,
  MyAppointments,
  Profile,
  Register,
} from "./pages/Export";
import Contact from "./pages/contact/page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/doctors/:specialist",
        element: <Doctors />,
      },
      {
        path: "/doctors",
        element: <Doctors />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/my-appointments",
        element: <MyAppointments />,
      },
      {
        path: "/appointments/:doctorId",
        element: <Appointments />,
      },
    ],
  },
]);

const App = () => {
  return (
    <main className="min-h-screen w-screen">
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer />
    </main>
  );
};

export default App;
