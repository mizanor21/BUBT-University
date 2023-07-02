import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/HomePage/Home/Home";
import History from "../Pages/OtherPages/About/History/History";
import NoticeDetails from "../Pages/HomePage/TabNoticeProgramsEvent/NoticeDetails";
import EventDetails from "../Pages/HomePage/TabNoticeProgramsEvent/EventDetails";
import AllStories from "../Pages/HomePage/Alumni/AllStories";

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
        path: "/notice-details/:id",
        element: <NoticeDetails></NoticeDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/notice-details/${params.id}`),
      },
      {
        path: "/event-details/:id",
        element: <EventDetails></EventDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/event-details/${params.id}`),
      },
      {
        path: "/all-stories",
        element: <AllStories></AllStories>,
        loader: () => fetch("http://localhost:5000/all-stories"),
      },
    ],
  },
]);

export default router;
