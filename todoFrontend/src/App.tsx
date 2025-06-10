import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Nav from "./Components/nav";
import HomePage from "./pages/home";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Nav />
        <HomePage />
      </>
    ),
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
