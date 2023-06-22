import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/HomePage/Home/Home";
import History from "../Pages/OtherPages/About/History/History";
import BubtYoutube from "../Pages/HomePage/VideoSection/BubtYoutube";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/history",
        element: <History></History>,
      },
      {
        path: "/bubt-video",
        element: <BubtYoutube></BubtYoutube>,
      },
    ],
  },
]);

export default router;
