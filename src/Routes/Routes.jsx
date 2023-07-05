import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/HomePage/Home/Home";
import History from "../Pages/OtherPages/About/History/History";
import NoticeDetails from "../Pages/HomePage/TabNoticeProgramsEvent/NoticeDetails";
import EventDetails from "../Pages/HomePage/TabNoticeProgramsEvent/EventDetails";
import AllStories from "../Pages/HomePage/Alumni/AllStories";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Facultys from "../Pages/OtherPages/Academic/Faculty/Facultys";
import FacultyDetails from "../Pages/OtherPages/Academic/Faculty/FacultyDetails";
import MissionAndObjectives from "../Pages/OtherPages/About/MissionAndObjectives/MissionAndObjectives";
import Campus from "../Pages/OtherPages/About/Campus/Campus";
import GeneralRules from "../Pages/OtherPages/About/GeneralRoles/GeneralRoles";
import Career from "../Pages/OtherPages/About/Career/Career";
import Evaluation from "../Pages/OtherPages/Academic/Evaluation/Evaluation";
import RulesAndRegulation from "../Pages/OtherPages/Academic/RulesAndRegulation/RulesAndRegulation";
import SemesterPolicy from "../Pages/OtherPages/Academic/SemesterPolicy/SemesterPolicy";
import SpecialFeature from "../Pages/OtherPages/Academic/SpecialFeature/SpecialFeature";

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
        path: "/mission-objectives",
        element: <MissionAndObjectives></MissionAndObjectives>,
      },
      {
        path: "/campus",
        element: <Campus></Campus>,
      },
      {
        path: "/general-rules",
        element: <GeneralRules></GeneralRules>,
      },
      {
        path: "/career",
        element: <Career></Career>,
      },
      {
        path: "/evaluation",
        element: <Evaluation></Evaluation>,
      },
      {
        path: "/rules-regulations",
        element: <RulesAndRegulation></RulesAndRegulation>,
      },
      {
        path: "/semester-policy",
        element: <SemesterPolicy></SemesterPolicy>,
      },
      {
        path: "/special-features",
        element: <SpecialFeature></SpecialFeature>,
      },
      {
        path: "/notice-details/:id",
        element: <NoticeDetails></NoticeDetails>,
        loader: ({ params }) =>
          fetch(
            `https://bubt-university-server-mizanor21.vercel.app/notice-details/${params.id}`
          ),
      },
      {
        path: "/event-details/:id",
        element: <EventDetails></EventDetails>,
        loader: ({ params }) =>
          fetch(
            `https://bubt-university-server-mizanor21.vercel.app/event-details/${params.id}`
          ),
      },
      {
        path: "/all-stories",
        element: <AllStories></AllStories>,
        loader: () =>
          fetch(
            "https://bubt-university-server-mizanor21.vercel.app/all-stories"
          ),
      },
      {
        path: "/faculty",
        element: <Facultys></Facultys>,
        loader: () =>
          fetch("https://bubt-university-server-mizanor21.vercel.app/faculty"),
      },
      {
        path: "/faculty-details/:id",
        element: <FacultyDetails></FacultyDetails>,
        loader: ({ params }) =>
          fetch(
            `https://bubt-university-server-mizanor21.vercel.app/faculty-details/${params.id}`
          ),
      },
    ],
  },
  {
    path: "*",
    element: <Main></Main>,
    children: [
      {
        path: "*",
        element: <ErrorPage></ErrorPage>,
      },
    ],
  },
]);

export default router;
