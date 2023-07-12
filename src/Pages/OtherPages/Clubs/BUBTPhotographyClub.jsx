import React from "react";
import image1 from "../../../../src/assets/images/convocation.jpeg";

const BUBTPhotographyClub = () => {
  return (
    <>
      <div className="relative">
        <img src={image1} alt="Banner" className="object-cover w-full h-64" />
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-opacity-50 bg-gray-900">
          <h1 className="text-white text-4xl font-bold">
            BUBT Photography Club
          </h1>
        </div>
      </div>
      <div className="container  p-8 mx-auto max-w-lg">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold">BUBT Photography Club</h1>
      </div>
      <div className="mb-8">
        <p>
          BUBT Photography Club is a creative hub for the students of Bangladesh University of Business and Technology (BUBT) interested in photography and cinematography. The club has been active since its inception on February 24th, 2014, and has been making a difference by capturing moments and displaying creativity through photographs and cinematographs.
        </p>
      </div>
      <div className="mb-8">
        <p>
          The club provides various opportunities for students to develop their skills and understanding of photography, including photo composition, artistic expression, editing and enhancing images using art software, videography, cinematography, and mobile photography. Students also have the chance to practice their skills by photographing university-related activities and events.
        </p>
        <p>
          BUBT Photography Club is not only a platform for skill development but also a venue for meeting new people and having fun while learning new things about photography.
        </p>
      </div>
      <div className="mb-8">
        <h2 className="text-lg font-bold">Activities</h2>
        <ul className="list-disc pl-8">
          <li>Meetings: Club members openly discuss photography among themselves during meetings.</li>
          <li>Photo exhibition: Students get the opportunity to showcase their photographic talents to the public through exhibitions.</li>
          <li>Photo workshops and seminars: Renowned photographers conduct workshops and seminars to help students develop their talents.</li>
          <li>Intra University Photo competition: The club organizes various photo competitions to nurture students' talent.</li>
          <li>Photo walk or club outings and field trips: Practical photography learning is facilitated through outings and field trips.</li>
          <li>Photo Adda/Photo discussion: Students can express their thoughts, questions, and ideas about photography during these discussions.</li>
          <li>Member Collection Campaign: Students have the opportunity to develop their talent by joining the club through member collection campaigns.</li>
          <li>Career Adda in the webinar: The club organizes career discussions to provide students with knowledge to apply their skills effectively.</li>
        </ul>
      </div>
      <div className="mb-8">
        <h2 className="text-lg font-bold">Achievements</h2>
        <p>
          The members of the club have participated in various photography competitions held in the country and abroad, bringing numerous prizes and honor to the university.
        </p>
      </div>
      <div className="mb-8">
        <p>
          BUBT Photography Club provides a great opportunity for students to connect with others, take initiative, show leadership, and unleash their creativity. All levels of experience are welcome and encouraged in this club to explore the exciting world of visual arts.
        </p>
      </div>
    </div>
    </>
  );
};

export default BUBTPhotographyClub;
