import React from "react";
import image1 from "../../../../src/assets/images/convocation.jpeg";
import { Link } from "react-router-dom";

const BUBTMootCourtSocietyBMCS = () => {
  return (
    <>
      <div className="relative">
        <img src={image1} alt="Banner" className="object-cover w-full h-64" />
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-opacity-50 bg-gray-900">
          <h1 className="text-white text-2xl lg:text-4xl font-bold">
            BUBT Moot Court Society BMCS
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
                  BUBT BMCS
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-3xl my-10">
        <div className="my-3">
          <h1 className="text-2xl font-bold">
            Bangladesh University of Business and Technology Moot Court Society
            (BMCS)
          </h1>
        </div>
        <div className="mb-8">
          <p>
            The Bangladesh University of Business and Technology Moot Court
            Society (BMCS), also known as BUBT Moot Court Society-BMCS, was
            established on August 26th, 2019. BMCS is an organization devoted to
            the development of excellence in advocacy and the promotion of
            advocacy skills among law students. Its aim is to select, prepare,
            and train exceptional groups of law students to become efficient
            legal practitioners. BMCS encourages students to be involved in
            social development and bring about change in society through
            activities such as street law, youth parliament sessions, and legal
            clinics. Additionally, BMCS aims to promote relationships and
            cooperation between law firms and society members.
          </p>
        </div>
        <div className="mb-8">
          <p>
            To achieve these goals, the society organizes various activities to
            train its members in moot and advocacy, facilitated by experts such
            as judges, advocates, and professors. BMCS also organizes training
            sessions for participation in regional and international moot court
            competitions. The society promotes programs such as moot court
            competitions, legal writing competitions, quiz competitions, case
            analysis, and public speaking competitions among its members and
            students of BUBT.
          </p>
        </div>
        <div className="mb-8">
          <p>
            BMCS regularly participates in national and international moot court
            competitions and has achieved significant accomplishments. Some
            notable competitions in which BMCS has participated include:
          </p>
          <ul className="list-disc pl-8">
            <li>Philip C. Jessup International Law Moot Court Competition</li>
            <li>K. Luthra Memorial Moot Court Competition</li>
            <li>Henry Dunant Memorial Moot Court Competition</li>
            <li>The Prof. N. R. Madhava Menon SAARCLAW Mooting Competition</li>
            <li>Professor Shah Alam Constitutional Moot Court Competition</li>
            <li>TIB Anti-Corruption Moot Court Competition</li>
          </ul>
        </div>
        <div className="mb-8">
          <p>
            Mooting is an important part of legal education, demonstrating
            interest in advocacy and competence as an advocate. A moot court
            competition simulates a court hearing, where participants analyze a
            problem, research relevant laws, prepare written submissions, and
            present oral arguments.
          </p>
        </div>
        <div className="mb-8">
          <h2 className="text-lg font-bold">Achievements of BMCS</h2>
          <ul className="list-disc pl-8">
            <li>Runner-up in the BLLSA Moot Court Competition, 2021</li>
            <li>
              Ranked 3rd in the 2nd Shah Alam Constitutional Law Moot
              Competition 2020
            </li>
            <li>
              Participated in the 1st Human Rights and Social Justice Summer
              School 2022 held in India
            </li>
            <li>
              Participated in the 7th Winter School on Theory and Practice of
              Genocide Studies
            </li>
            <li>
              Ranked 26th in the 18th K Luthra Memorial Moot Court Competition,
              2022 held in India
            </li>
            <li>
              Secured 13th position in the 13th Henry Dunant Memorial Moot Court
              Competition Bangladesh National Round, 2022
            </li>
          </ul>
        </div>
        <div className="mb-8">
          <p>
            For any kind of information, you may contact BMCS via email:
            bmcs@bubt.edu.bd.
          </p>
          <p>
            Visit the BMCS Facebook page for more details:{" "}
            <a
              href="https://www.facebook.com/bubtmcs"
              className="text-blue-500"
            >
              https://www.facebook.com/bubtmcs
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default BUBTMootCourtSocietyBMCS;
