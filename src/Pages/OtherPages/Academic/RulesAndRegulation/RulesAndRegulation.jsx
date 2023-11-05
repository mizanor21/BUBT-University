import React from "react";
import image1 from "../../../../assets/images/convocation.jpeg";
import { Fade, Slide } from "react-awesome-reveal";
import { Link } from "react-router-dom";

const RulesAndRegulation = () => {
  return (
    <>
      {/* => Banner For Rules And Regulations */}
      <div className="relative">
        <img src={image1} alt="Banner" className="object-cover w-full h-64" />
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-opacity-50 bg-gray-900">
          <h1 className="text-white font-bold text-2xl lg:text-3xl">
            Rules And Regulation
          </h1>
          <div className="text-sm text-white breadcrumbs">
            <ul>
              <li>
                <Link to={"/"}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="w-4 h-4 mr-2 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                    ></path>
                  </svg>
                  Home
                </Link>
              </li>
              <li>
                <Link>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="w-4 h-4 mr-2 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                    ></path>
                  </svg>
                  Roles and Regulation
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Text Rules and Regulations  */}
      <div className="my-8 mx-auto max-w-2xl text-justify">
        <Slide>
          <p className="mb-4 font-bold text-2xl lg:text-3xl animate-fade-in">
            Academic Standards
          </p>
        </Slide>
        <Fade delay={1e3} cascade damping={1e-1}>
          <p className="animate-fade-in">
            The curricula of all programs offered by BUBT have been modeled on
            similar academic programs of reputed North American and European
            Universities to facilitate transfer of credits earned at BUBT to
            universities abroad.
          </p>
        </Fade>
        <Slide>
          {" "}
          <p className="mt-8 mb-4 font-bold text-2xl lg:text-3xl">
            Registration
          </p>
        </Slide>
        <Fade delay={1e3} cascade damping={1e-1}>
          <p>
            All the new students must register their courses in the prescribed
            Registration Form at the time of admission. Existing students must
            register their courses of the new semester before the classes of the
            new semester start on payment of their semester tuition and other
            fees or their parts as determined by the university administration.
            Students should consult the Faculty in Charge/Chairman of the
            Department/Program Director (in case of MBA, EMBA & MBM Programs) in
            planning their course schedule and should follow the rules and
            procedures related to registration for courses.
          </p>
        </Fade>
        <Slide>
          <p className="mt-8 mb-4 font-bold text-2xl lg:text-3xl">
            Late Registration
          </p>
        </Slide>
        <Fade delay={1e3} cascade damping={1e-1}>
          <p>
            A student who seeks to register after the first day of classes must
            obtain permission from the office of the university. Those students
            who are given permission to register late may have to pay a late
            registration fee.
          </p>
        </Fade>
        <Slide>
          <p className="mt-8 mb-4 font-bold text-2xl lg:text-3xl">
            Orientation
          </p>
        </Slide>
        <Fade delay={1e3} cascade damping={1e-1}>
          <p>
            All new students must participate in the orientation program.
            Students are encouraged to bring their parents or guardians to the
            orientation ceremony.
          </p>
        </Fade>
        <Slide>
          <p className="mt-8 mb-4 font-bold text-2xl lg:text-3xl">
            Student Identification Cards
          </p>
        </Slide>
        <Fade delay={1e3} cascade damping={1e-1}>
          <p>
            All new students will receive photo Identification Cards from the
            admission office. These cards are used for various purposes such as
            entering into the campus, attending classes, using the library and
            computer labs, etc.
          </p>
        </Fade>
        <Slide>
          <p className="mt-8 mb-4 font-bold text-2xl lg:text-3xl">
            Course Offerings
          </p>
        </Slide>
        <Fade delay={1e3} cascade damping={1e-1}>
          <p>
            All courses at BUBT follow a logical sequence. At the very outset,
            students are encouraged to take foundation courses. Next comes the
            core courses. Here the students are exposed to the various aspects
            of their discipline from the basics to the manageable details.
            Having completed the core courses, students meet the requirements
            for enrolling into the concentration or major courses which prepare
            the students for a career in the chosen area of specialization.
            Finally, a student has to complete the required Internship
            assignment to gain practical work experience.
          </p>
        </Fade>
        <Slide>
          <p className="mt-8 mb-4 font-bold text-2xl lg:text-3xl">
            Course Load
          </p>
        </Slide>
        <Fade delay={1e3} cascade damping={1e-1}>
          <p>
            Twelve credits without laboratory credits, if any, (that is, 4
            courses per semester) are the normal course load according to BUBT
            standard. However, a student can enroll for more or a smaller number
            of courses with necessary permission.
          </p>
        </Fade>
        <Slide>
          <p className="mt-8 mb-4 font-bold text-2xl lg:text-3xl">
            Course Sequence
          </p>
        </Slide>
        <Fade delay={1e3} cascade damping={1e-1}>
          <p>
            A student must pass all prerequisite courses (foundation, support
            and core courses) in order to register into higher-level
            (major/concentration) courses required for the preferred degree. All
            course sequences must be maintained, including English Language
            requirements for the undergraduate programs. A student must fulfill
            English Language requirements by the fourth semester after
            admission.
          </p>
        </Fade>
        <Slide>
          <p className="mt-8 mb-4 font-bold text-2xl lg:text-3xl">
            Class Attendance
          </p>
        </Slide>
        <Fade delay={1e3} cascade damping={1e-1}>
          <p>
            A student must attend at least 70% of classes in all the courses.
            Other than LLB two-year and LLM programs, 5% marks in each course
            are allocated for attendance, and this score will vary from 1 to 5
            according to his/her percentage of presence as noted below. In case
            of LLB two-year and LLM programs, 10 marks are allocated for class
            attendance.
          </p>
        </Fade>
        <div className="overflow-x-auto mt-8">
          <table className="table table-zebra">
            <thead>
              <tr className="bg-slate-200">
                <th></th>
                <th>Percentage of Attendance</th>
                <th>Marks (Other than LL.B & LL.M)</th>
                <th>Marks (LL.B /LL.M )</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>1</th>
                <td>70-75</td>
                <td>1</td>
                <td>2</td>
              </tr>
              <tr>
                <th>2</th>
                <td>76-80</td>
                <td>2</td>
                <td>4</td>
              </tr>
              <tr>
                <th>3</th>
                <td>81-85</td>
                <td>3</td>
                <td>Red</td>
              </tr>
              <tr>
                <th>4</th>
                <td>86-90</td>
                <td>4</td>
                <td>Red</td>
              </tr>
              <tr>
                <th>5</th>
                <td>91-100</td>
                <td>5</td>
                <td>Red</td>
              </tr>
            </tbody>
          </table>
        </div>
        <Slide>
          <p className="mt-8 mb-4 font-bold text-2xl lg:text-3xl">
            Policy for Semester Promotion
          </p>
        </Slide>
        <Fade delay={1e3} cascade damping={1e-1}>
          <p>
            For 'F' grade holders, the course must be repeated within the next 3
            consecutive semesters, but pre-requisite course(s) should be
            repeated on a priority basis. Scorer of 'F' grade shall have to pay
            full fee for the retake course/courses. For improvement of grade in
            any course, the incumbent student may be allowed to repeat for
            improvement in that course. However, if any student wishes to take
            this privilege, he/she has to submit an application through the
            proper channel at least within 2 weeks after the publication of the
            result of a particular semester. The improved grade will be computed
            in the final transcript, and the previous grade(s) (i.e., 'F' or any
            other grade of the improver) will be marked with 'R' grade (as
            retake of the course) which has no effect on GPA or CGPA. For
            improvement of grade, the student has to register for the course as
            usual by paying the half tuition fee (i.e., credit hour basis).
          </p>
        </Fade>
        <Slide>
          <p className="mt-8 mb-4 font-bold text-2xl lg:text-3xl">
            Repeating Courses
          </p>
        </Slide>{" "}
        <Fade delay={1e3} cascade damping={1e-1}>
          <p>
            Students may repeat courses in order to improve their grades. They
            must register for and complete the course/courses to accomplish the
            repeat, and 50% of the tuition fees have to be paid for the
            course/courses repeated. However, a student who receives an "F"
            grade in any course must repeat that course and obtain a minimum of
            "D" grade in order to meet degree requirements. Both the original
            and the repeat grades are recorded in the transcript, but CGPA is
            calculated on the basis of the better of the two grades. A course
            can be repeated once only.
          </p>
        </Fade>
        <Slide>
          <p className="mt-8 mb-4 font-bold text-2xl lg:text-3xl">
            Retake / Repeat Fees
          </p>
        </Slide>
        <Fade delay={1e3} cascade damping={1e-1}>
          <p>
            Students scoring an 'F' grade in any course shall have to pay the
            full tuition fees for repeating the course. Students with a grade
            lower than "A" in any course may retake the course to improve their
            grades and shall have to pay half of the tuition fees for the
            course/courses.
          </p>
        </Fade>
        <Slide>
          <p className="mt-8 mb-4 font-bold text-2xl lg:text-3xl">
            Withdrawal from a Course
          </p>
        </Slide>{" "}
        <Fade delay={1e3} cascade damping={1e-1}>
          <p>
            A student may withdraw from a course within 15 days from the date of
            starting the semester. Permission from the appropriate authority
            must be obtained for withdrawal.
          </p>
        </Fade>
      </div>
    </>
  );
};

export default RulesAndRegulation;
