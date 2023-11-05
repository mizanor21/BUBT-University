import React, { useEffect } from "react";
import image1 from "../../../../assets/images/convocation.jpeg";
import { Link } from "react-router-dom";

const GeneralRules = () => {
  useEffect(() => {
    const textElements = document.querySelectorAll(".animate-text");

    function animateTextOnScroll() {
      textElements.forEach((element) => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementPosition < windowHeight) {
          element.classList.add("opacity-100");
        } else {
          element.classList.remove("opacity-100");
        }
      });
    }

    window.addEventListener("scroll", animateTextOnScroll);
    animateTextOnScroll();

    return () => {
      window.removeEventListener("scroll", animateTextOnScroll);
    };
  }, []);
  return (
    <>
      {/* Banner For General Rules and Regulations */}
      <div className="relative">
        <img src={image1} alt="Banner" className="object-cover w-full h-64" />
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-opacity-50 bg-gray-900">
          <h1 className="text-white text-4xl font-bold">
            General Rules and Regulations
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
                  General Rules
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Text For General Rules and Regulations */}
      <div className="bg-white py-8">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            General Rules and Regulations
          </h2>
          <div className="text-gray-700 leading-relaxed text-justify">
            <p className="mb-6 animate-text transition-opacity duration-500 opacity-0">
              <span className="font-bold">Right to Change Rules:</span>
              <br />
              The University reserves the right to modify or change academic
              rules and regulations, and the rate of fees. Such changes will go
              into force as determined by the appropriate authorities of BUBT or
              the government.
            </p>
            <p className="mb-6 animate-text transition-opacity duration-500 opacity-0">
              <span className="font-bold">Right to Dismiss Students:</span>
              <br />
              The University reserves the right to dismiss or exclude any
              student from the University, or from a program, or from any class
              or classes, whenever, in the interest of the students or the
              University, the University Administration deems it necessary.
            </p>
            <p className="mb-6 animate-text transition-opacity duration-500 opacity-0">
              <span className="font-bold">Discipline Committee:</span>
              <br />
              The University has a Discipline Committee to consider the report
              of an offense or a grievance. The Committee acts independently to
              ascertain the facts. Consequent upon the findings of the
              Discipline Committee, existing BUBT rules and regulations are
              enforced.
            </p>
            <p className="mb-6 animate-text transition-opacity duration-500 opacity-0">
              <span className="font-bold">Academic Honesty:</span>
              <br />
              All students must maintain academic honesty. Any means of
              unauthorized assistance is deemed to be an act of cheating and it
              constitutes grounds for disciplinary action. Any student found to
              be engaged in cheating might receive a reduced grade for the fault
              in question, or a failing grade in the course, or such other
              penalty as the instructor deems appropriate. In extreme cases,
              students may even be expelled from the University.
            </p>
            <p className="mb-6 animate-text transition-opacity duration-500 opacity-0">
              <span className="font-bold">Medium of Instruction:</span>
              <br />
              English is the medium of instruction in the University. While both
              English and Bangla may be used for day-to-day transactions with
              the administration, the faculty and students in the classroom use
              only English as the vehicle of communication, whether spoken or
              written.
            </p>
            <p className="mb-6 animate-text transition-opacity duration-500 opacity-0">
              <span className="font-bold">Nondiscrimination Statement:</span>
              <br />
              The commitment of the University to the most fundamental
              principles of academic freedom, equality of opportunity, and human
              dignity requires that decisions involving students and employees
              be based on individual merit and be free from invidious
              discrimination in all its forms.
              <br />
              It is the policy of the Bangladesh University of Business &
              Technology (BUBT) not to engage in any discrimination or
              harassment against any person because of age, religion, sex,
              national origin, marital status, etc. This nondiscrimination
              policy applies to admissions, employment, access to, and treatment
              in, each University program and activity. Complaints of invidious
              discrimination prohibited by the University as a matter of policy
              are to be resolved within existing University procedures.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default GeneralRules;
