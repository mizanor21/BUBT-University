import React from "react";
import image1 from "../../../../src/assets/images/convocation.jpeg";
import { Link } from "react-router-dom";
const IEEEBUBTStudentBranch = () => {
  return (
    <>
      <div className="relative">
        <img src={image1} alt="Banner" className="object-cover w-full h-64" />
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-opacity-50 bg-gray-900">
          <h1 className="text-white text-2xl lg:text-4xl font-bold">
            IEEE BUBT Student Branch
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
                  IEEE BUBT Student Branch
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="max-w-3xl mx-auto my-10">
        <div className="text-justify">
          <h1 className="text-2xl font-bold my-2">
            Message from the Branch Chairperson
          </h1>
          <div className="">
            <p className="text-lg">
              It is my great honor to serve as the Chairperson of the IEEE BUBT
              Student Branch, Bangladesh University of Business and Technology
              (BUBT). I would like to sincerely thank and warmly welcome the
              elected body and the members of IEEE BUBT SB. This branch has been
              established to foster technological innovation and excellence for
              the benefit of humanity and the advancement of technical
              professionalism. Our aim is to provide students with opportunities
              to learn, share, and innovate in the different fields of science
              and technology.
            </p>
            <br />
            <p className="text-lg">
              The Student Branch has made tremendous efforts in motivating
              students and giving them the right opportunities to lead so they
              can make the most of their talent. This platform will offer a rich
              scientific program of the highest quality and intends to bring
              together engineers and practitioners.
            </p>
          </div>
          <div className="text-right mt-5">
            <p className="font-bold">Md. Tabil Ahammed</p>
            <p className="text-sm">Chairperson</p>
            <p className="text-sm">IEEE BUBT Student Branch</p>
          </div>
          <div className="my-10">
            <h2 className="text-2xl font-bold my-2">Constitution</h2>
            <p className="text-lg">
              The IEEE BUBT Student Branch of Bangladesh University of Business
              &amp; Technology (BUBT) is a non-profit membership organization
              dedicated to promoting professionalism among power engineering
              students and is a student chapter affiliated with the Institute of
              Electrical and Electronics Engineers (IEEE).
            </p>
          </div>
        </div>

        <div className="my-10 text-justify">
          <div className="mb-3">
            <h1 className="text-2xl font-bold">Constitution</h1>
          </div>
          <div className="my-3">
            <h2 className="text-lg font-bold mb-2">Article I – Name</h2>
            <p>
              The organization’s title will be IEEE BUBT Student Branch at
              Bangladesh University of Business &amp; Technology (BUBT).
            </p>
          </div>
          <div className="mb-3">
            <h2 className="text-lg font-bold mb-2">Article II – Purpose</h2>
            <p className="">Section 1: Purpose</p>
            <ul className="list-disc list-inside">
              <li>
                To promote excellence in engineering and the role of engineers
                in developing the quality of life.
              </li>
              <li>
                To encourage professionalism and professional registration among
                power engineering students and engineering staff, and to instill
                a code of engineering ethics in the engineering community.
              </li>
              <li>
                To develop and implement activities that promote awareness of
                career opportunities and the role of professional engineers in
                society.
              </li>
              <li>
                To provide orientation and guidance for new power engineering
                students by providing a communication link with other students
                and an opportunity to work for common goals.
              </li>
              <li>
                To work as a coordinating body with other technical societies on
                campus to produce integrated extra-curricular activities
                particularly.
              </li>
              <li>To develop the funds necessary to achieve these purposes.</li>
              <li>
                To uphold the vision and traditions of Bangladesh University of
                Business &amp; Technology (BUBT).
              </li>
              <li>
                To engage in such other activities as might be consistent with
                and reasonably related to the purposes previously described in
                this Article.
              </li>
            </ul>
            <p className="">Section 2: Compliance</p>
            <p>
              The IEEE BUBT Student Branch shall be in accordance with the
              Constitution and Bylaws of the IEEE.
            </p>
          </div>
          <div className="">
            <h2 className="text-lg font-bold mb-2">Article III – Membership</h2>
            <p className="">
              Section 1: Full Membership shall be limited to undergraduate and
              graduate students of the Bangladesh University of Business &amp;
              Technology (BUBT).
            </p>
            <p className="">
              Section 2: Full Membership shall consist of Student Members and
              Graduate Student Members of the IEEE.
            </p>
            <p className="">
              Section 3: Branch Members consist of Full Members and Honorary
              Members.
            </p>
            <p className="">
              Section 4: Membership and participation in the Branch activities
              shall be free from discrimination based on any and all of the
              following: gender, race, religion, disability, or harassment
              orientation.
            </p>
          </div>
          <div className="">
            <h2 className="text-lg font-bold my-2">Article III – Officers</h2>
            <p className="">Section 1: The Officers of the Branch shall be:</p>
            <ul className="list-disc list-inside">
              <li>The Chairperson</li>
              <li>The Vice-Chairperson (Activity)</li>
              <li>The Vice-Chairperson (Technical)</li>
              <li>General Secretary</li>
              <li>Joint General Secretary</li>
              <li>Treasurer</li>
              <li>Event Co-Ordinator (Activity)</li>
              <li>Event Co-Ordinator (Logistics)</li>
              <li>Web Master</li>
              <li>Publication Secretary</li>
              <li>Social Media Co-Ordinator</li>
            </ul>
            <p className="">
              Section 2: Only Full Members who are undergraduate or graduate
              students in Faculty of Engineering &amp; Applied Sciences (FEAS)
              in good standing shall be eligible to hold office. Only one
              Officer position can be held. Honorary Members shall not be
              entitled to vote or to hold office.
            </p>
            <p className="">
              Section 3: The term of office shall be one year and shall begin on
              January 1 of each year.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-bold my-2">Article IV – Executive</h2>
            <p className="">
              Section 1: The management of the affairs of the Branch shall be in
              the hands of the Executive, consisting of the Officers of the
              Branch and the Branch Counselor, who is appointed by the IEEE. The
              Branch Chair shall also chair the Executive.
            </p>
            <p className="">
              Section 2: The Executive shall be the governing body of the Branch
              and shall transact all business it deems advisable, including the
              filling of vacancies in offices, authorization of expenditure,
              etc.
            </p>
            <p className="">
              The duties of the Executive include but are not limited to:
            </p>
            <ul className="list-disc list-inside">
              <li>Operating the day-to-day affairs of the</li>
              <li>Acting as liaison between the Branch and any outside</li>
              <li>Submitting one annual report per Executive</li>
              <li>Recruiting volunteers’ assistance as deemed</li>
              <li>
                Submitting a written report to the Executive for all events for
                which he/she was responsible for, within 2 weeks of each
              </li>
            </ul>
          </div>
        </div>

        <div className="text-justify">
          <h1 className="text-lg font-bold my-2">
            Article V – Duties of Officers
          </h1>

          <div className="">
            <h2 className="text-md font-bold ">Chairperson:</h2>
            <ul className="list-disc list-inside">
              <li>
                Ensure all actions required for the smooth operation of the
                organization are accomplished.
              </li>
              <li>
                Mediate problems within the organization and provide a clear and
                precise vision of the future development.
              </li>
              <li>
                Certify that officers are meeting or exceeding goals set forth
                for each semester.
              </li>
              <li>Hold regular meetings of the Branch Executive Committee.</li>
              <li>Complete Annual activity report to IEEE Nationals.</li>
              <li>Report officers via vtools to IEEE Nationals.</li>
              <li>Name is on the bank account.</li>
              <li>Ensure smooth transition between new administrations.</li>
            </ul>
          </div>
          <div className="my-2">
            <h2 className="text-md font-bold ">Vice-Chairperson:</h2>
            <ul className="list-disc list-inside">
              <li>Assist the Chairperson in their tasks and duties.</li>
              <li>
                Help in the recruitment of new members and advertise the
                organization.
              </li>
              <li>Assist other members with their duties when needed.</li>
              <li>
                Perform all functions of the Branch Chairperson if the Branch
                Chairperson is absent.
              </li>
            </ul>
          </div>
          <div className="">
            <h2 className="text-lg font-bold ">Secretary:</h2>
            <ul className="list-disc list-inside">
              <li>Keep detailed minutes of each meeting.</li>
              <li>Maintain the membership roster (active and non-active).</li>
              <li>Be responsible for all correspondence.</li>
              <li>
                Maintain a binder of all board activities and email outlines,
                flyers, etc.
              </li>
              <li>Arrange for an orderly transfer of records.</li>
            </ul>
          </div>
          <div className="my-2">
            <h2 className="text-lg font-bold ">Treasurer:</h2>
            <ul className="list-disc list-inside">
              <li>
                Maintain the appropriate financial accounts and ensure all
                documents are accurate and up-to-date.
              </li>
              <li>
                Ensure the new Chairperson, Counselor, and/or new treasurer have
                signatures on the account.
              </li>
              <li>
                Prepare an annual budget report to be sent into IEEE Nationals.
              </li>
              <li>Oversee all fundraising efforts.</li>
              <li>
                Arrange for an orderly transfer of all financial records to the
                incoming treasurer.
              </li>
            </ul>
          </div>
          <div className="">
            <h2 className="text-lg font-bold ">Event Coordinator:</h2>
            <ul className="list-disc list-inside">
              <li>
                Set up bi-weekly meetings and look into IEEE events held
                throughout surrounding communities.
              </li>
              <li>
                Coordinate and organize social events for the organization.
              </li>
            </ul>
          </div>
          <div className="my-2">
            <h2 className="text-lg font-bold ">Social Media Coordinator:</h2>
            <ul className="list-disc list-inside">
              <li>
                Create event-specific posters and announcements for the
                organization.
              </li>
              <li>
                Manage and update the organization's website and social media
                platforms.
              </li>
              <li>
                Communicate information to members through various channels like
                email and Discord.
              </li>
              <li>
                Target other students interested in electronics and electrical
                engineering.
              </li>
            </ul>
          </div>
          <div className="my-2">
            <h2 className="text-lg font-bold ">Webmaster:</h2>
            <ul className="list-disc list-inside">
              <li>
                Administer all of the organization's internet platforms
                (website, social media accounts, etc.).
              </li>
              <li>
                Keep the content on the website and social media platforms
                up-to-date.
              </li>
            </ul>
          </div>
        </div>

        <div className="text-justify">
          <div className="my-3">
            <h1 className="text-xl font-bold">Article VI – Activities</h1>
          </div>
          <div className="my-2">
            <h2 className="text-lg font-bold ">Section 1: Planning</h2>
            <p>
              The Branch Leadership is responsible for creating a tentative
              schedule of Branch activities for the duration of a semester prior
              to the start of that semester. The schedule shall declare meeting
              times, dates of activities, and the schedule of related events.
              This schedule shall be dictated primarily by the Branch Leadership
              with the review of Branch Counsellor.
            </p>
          </div>
          <div className="my-2">
            <h2 className="text-lg font-bold ">Section 2: Officer Meetings</h2>
            <p>
              Officer meetings shall be held once a week to oversee scheduled
              events and coordinate upcoming activities. The objective of the
              officer meetings is to allow the Branch Leadership to plan and
              decide on upcoming Branch activities. Officer meetings allow each
              Branch Leader to share open ideas on branch decisions while the
              President holds jurisdiction. The officer meetings are held
              exclusively to the Branch Leadership.
            </p>
          </div>
          <div className="my-2">
            <h2 className="text-lg font-bold ">Section 3: General Meetings</h2>
            <p>
              General meetings held biweekly to promote the Branch and relevant
              material. General meetings seek to recruit new members of the
              Branch while offering insight on Branch developments and its
              related fields. Exemptions of general meetings may occur during
              university holidays and breaks. General meetings are open to the
              public.
            </p>
          </div>
          <div className="my-2">
            <h2 className="text-lg font-bold ">Section 4: Other Activities</h2>
            <p>
              The Branch Leadership may offer other Branch related activities in
              compliance with all rules and regulations of the governing bodies.
              These activities may include company tours, regional events,
              Branch conferences, and developments in research/skills of the
              Branch.
            </p>
          </div>

          <div className="my-3">
            <h1 className="text-xl font-bold">Article VI – Amendments</h1>
          </div>
          <div className="my-2">
            <h2 className="text-lg font-bold ">Section 1: Amendment Process</h2>
            <p>
              In order to amend this Constitution, potential amendments shall be
              submitted to Branch Officers for review. If deemed appropriate,
              the Branch Officers will then subject the potential amendments for
              review by the Branch Membership. After a two-thirds vote in favor
              of the amendment, the amendment will be reviewed once more by the
              Branch Officers who will then decide with their own vote. If a
              two-thirds vote in favor of the amendment by the Branch Officers
              is found, then the amendment will officially be joined to this
              Constitution.
            </p>
            <p>
              If the potential amendments fail either by the vote from the
              Membership or by the vote from the Officers, it will be shelved
              for the duration of two weeks in which a Member, be that an
              Officer or not, of the Chapter may submit it for review of the
              Branch Officers to begin the process once more. Upon failing
              either vote a subsequent time, the potential amendments will be
              shelved for the duration of one year in which only an Officer may
              bring it up for vote once more until the period of one year has
              passed.
            </p>
          </div>

          <div className="my-3">
            <h1 className="text-xl font-bold">Article VII – Bylaws</h1>
          </div>
          <div className="my-2">
            <h2 className="text-lg font-bold ">
              Section 1: Existing Documents
            </h2>
            <p>
              The Branch officers will maintain a set of governing rules, which
              will be called the "Bylaws." These will provide further
              explanation of the internal rules and regulations as referred to
              in the Constitution.
            </p>
          </div>
          <div className="my-2">
            <h2 className="text-lg font-bold ">Section 2: Modification</h2>
            <p>
              The Branch officers can modify the contents of the Bylaws with a
              majority approval of the e-board. These modifications must be
              discussed at the official meetings and after a successful vote
              will be taken into effect immediately.
            </p>
          </div>

          <div className="my-3">
            <h1 className="text-xl font-bold">Article VIII – Dissolution</h1>
          </div>
          <div className="my-2">
            <h2 className="text-lg font-bold ">
              Section 1: Terms of Dissolution
            </h2>
            <p>
              The Branch shall dissolve upon request of Bangladesh University of
              Business & Technology (BUBT).
            </p>
          </div>
          <div className="my-2">
            <h2 className="text-lg font-bold ">
              Section 2: Disbursement of Funds
            </h2>
            <p>
              In the circumstance of Dissolution of the Branch, any financial
              accounts held by the Branch will dissipate. Any outstanding debts
              will be paid and any remaining funds will be donated to Bangladesh
              University of Business & Technology (BUBT).
            </p>
          </div>

          <div className="my-3">
            <h1 className="text-xl font-bold">Article IX – Finances</h1>
          </div>
          <p>
            The IEEE BUBT Student Branch at Bangladesh University of Business &
            Technology (BUBT) shall have an off-campus bank account through any
            bank. All funds will be stored in this bank account. The names on
            the bank account will be the Chairperson’s, the Treasurer’s, and the
            Counsellor’s. The treasurer and the Chairperson will be in charge of
            the finances. This organization will follow and be subject to all
            University policies, procedures, and practices regarding student
            organization accounts and finances.
          </p>

          <div className="my-3">
            <h1 className="text-xl font-bold">Article X– Ratification</h1>
          </div>
          <p>
            Ratification of the original constitution will be achieved by a
            majority vote of the acting officers, as well as the approval of the
            current Counsellor.
          </p>
        </div>
      </div>
    </>
  );
};

export default IEEEBUBTStudentBranch;
