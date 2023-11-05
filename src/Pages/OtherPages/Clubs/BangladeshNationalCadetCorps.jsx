import React from "react";
import image1 from "../../../../src/assets/images/convocation.jpeg";
import { Link } from "react-router-dom";

const BangladeshNationalCadetCorps = () => {
  return (
    <>
      <div className="relative">
        <img src={image1} alt="Banner" className="object-cover w-full h-64" />
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-opacity-50 bg-gray-900">
          <h1 className="text-white text-2xl lg:text-4xl font-bold">BNCC</h1>
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
                  BUBT BNCC
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-3xl my-10">
        <div className=" my-3">
          <h1 className="text-2xl font-bold">
            Bangladesh National Cadet Corps (BNCC)
          </h1>
        </div>
        <div className="mb-8">
          <p>
            Bangladesh National Cadet Corps (BNCC) is a Para-Military Defense
            Force, a Tri-Services Organization consisting of the Bangladesh
            Army, the Navy, and the Air Force.
          </p>
        </div>
        <div className="mb-8">
          <p>
            BUBT has been operating a BNCC Platoon since 2019. BUBT BNCC Platoon
            (Army Wing) was in operation under the Ramna Regiment (1 Battalion),
            Delta Company, and is currently under the Ramna Regiment (3
            Battalion), Alpha Company. Kazi Abubakar Siddique, Assistant
            Professor, Department of English, has been the PUO and the Platoon
            Commander of BUBT BNCC Platoon since the inception of the platoon.
            The cadets of BUBT BNCC Platoon are regular in their participation
            in different activities organized and arranged by BNCC.
          </p>
        </div>
        <div className="mb-8">
          <p>
            The motto of BNCC is "Knowledge & Discipline" with "The Volunteers"
            as its spirit. The objective of BNCC is to train the cadets in order
            to develop them as good citizens who can render their services to
            the nation as organized and disciplined volunteers during war and
            peace. BNCC provides cadets with various scopes that allow them to
            develop leadership, commandership, discipline, self-confidence, and
            good human qualities through a well-organized training process that
            includes a number of limited military and other professional
            training opportunities. During the tenure of cadetship, cadets have
            the following opportunities to avail and develop themselves as
            patriots, nationalists, and volunteers:
          </p>
          <ul className="list-disc pl-8">
            <li>7 days of Battalion Camping</li>
            <li>10 days of Regiment Camping</li>
            <li>12 days of Central Camping</li>
            <li>
              13 days of Camping and Joint Winter Exercise with the Armed Forces
            </li>
            <li>20 days of Camping for the Victory Day Parade</li>
            <li>28 days of National Camping and the Independence Day Parade</li>
            <li>
              Youth Exchange Program (YEP) with India, Nepal, Maldives, and
              Singapore; and so on
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default BangladeshNationalCadetCorps;
