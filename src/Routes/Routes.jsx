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
import AdmissionApply from "../Pages/OtherPages/Admission/AdmissionApply";
import ClassRoutine from "../Pages/OtherPages/Students/ClassRoutine/ClassRoutine";
import ClassRoutineDetails from "../Pages/OtherPages/Students/ClassRoutine/ClassRoutineDetails";
import ExamScheduleDetails from "../Pages/OtherPages/Students/ExamSchedule/ExamScheduleDetails";
import ExamSchedule from "../Pages/OtherPages/Students/ExamSchedule/ExamSchedule";
import SupleExam from "../Pages/OtherPages/Students/SupleExam/SupleExam";
import BusinessClub from "../Pages/OtherPages/Clubs/BusinessClub";
import CulturalClub from "../Pages/OtherPages/Clubs/CulturalClub";
import DebatingClub from "../Pages/OtherPages/Clubs/DebatingClub";
import BUBTITClub from "../Pages/OtherPages/Clubs/BUBTITClub";
import RoverScout from "../Pages/OtherPages/Clubs/RoverScout";
import BUBTSportsClub from "../Pages/OtherPages/Clubs/BUBTSportsClub";
import IEEEBUBTStudentBranch from "../Pages/OtherPages/Clubs/IEEEBUBTStudentBranch";
import BangladeshNationalCadetCorps from "../Pages/OtherPages/Clubs/BangladeshNationalCadetCorps";
import BUBTMootCourtSocietyBMCS from "../Pages/OtherPages/Clubs/BUBTMootCourtSocietyBMCS";
import BUBTPhotographyClub from "../Pages/OtherPages/Clubs/BUBTPhotographyClub";

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
      {
        path: "/faculty",
        element: <Facultys></Facultys>,
        loader: () => fetch("http://localhost:5000/faculty"),
      },
      {
        path: "/faculty-details/:id",
        element: <FacultyDetails></FacultyDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/faculty-details/${params.id}`),
      },
      {
        path: "/admission-apply",
        element: <AdmissionApply></AdmissionApply>,
      },
      {
        path: "/class-routine",
        element: <ClassRoutine></ClassRoutine>,
      },
      {
        path: "/class-routine/:id",
        element: <ClassRoutineDetails></ClassRoutineDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/class-routine/${params.id}`),
      },
      {
        path: "/exam-schedule",
        element: <ExamSchedule></ExamSchedule>,
      },
      {
        path: "/exam-schedule/:id",
        element: <ExamScheduleDetails></ExamScheduleDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/exam-schedule/${params.id}`),
      },
      {
        path: "/supplementary-exam-schedule",
        element: <SupleExam></SupleExam>,
      },
      {
        path: "/BusinessClub",
        element: <BusinessClub></BusinessClub>,
      },
      {
        path: "/CulturalClub",
        element: <CulturalClub></CulturalClub>,
      },
      {
        path: "/DebatingClub",
        element: <DebatingClub></DebatingClub>,
      },
      {
        path: "/BUBTITClub",
        element: <BUBTITClub></BUBTITClub>,
      },
      {
        path: "/RoverScout",
        element: <RoverScout></RoverScout>,
      },
      {
        path: "/BUBTSportsClub",
        element: <BUBTSportsClub></BUBTSportsClub>,
      },
      {
        path: "/RoverScout",
        element: <RoverScout></RoverScout>,
      },
      {
        path: "/IEEEBUBTStudentBranch",
        element: <IEEEBUBTStudentBranch></IEEEBUBTStudentBranch>,
      },
      {
        path: "/BangladeshNationalCadetCorps",
        element: <BangladeshNationalCadetCorps></BangladeshNationalCadetCorps>,
      },
      {
        path: "/BUBTMootCourtSocietyBMCS",
        element: <BUBTMootCourtSocietyBMCS></BUBTMootCourtSocietyBMCS>,
      },
      {
        path: "/BUBTPhotographyClub",
        element: <BUBTPhotographyClub></BUBTPhotographyClub>,
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
