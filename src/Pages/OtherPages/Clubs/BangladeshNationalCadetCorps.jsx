import React from "react";
import image1 from "../../../../src/assets/images/convocation.jpeg";

const BangladeshNationalCadetCorps = () => {
  return (
    <>
      <div className="relative">
        <img src={image1} alt="Banner" className="object-cover w-full h-64" />
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-opacity-50 bg-gray-900">
          <h1 className="text-white text-4xl font-bold">BUBT IT Club</h1>
        </div>
      </div>
      <div className="container  p-8 mx-auto max-w-lg">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold">Bangladesh National Cadet Corps (BNCC)</h1>
      </div>
      <div className="mb-8">
        <p>
          Bangladesh National Cadet Corps (BNCC) is a Para-Military Defense Force, a Tri-Services Organization consisting of the Bangladesh Army, the Navy, and the Air Force.
        </p>
      </div>
      <div className="mb-8">
        <p>
          BUBT has been operating a BNCC Platoon since 2019. BUBT BNCC Platoon (Army Wing) was in operation under the Ramna Regiment (1 Battalion), Delta Company, and is currently under the Ramna Regiment (3 Battalion), Alpha Company. Kazi Abubakar Siddique, Assistant Professor, Department of English, has been the PUO and the Platoon Commander of BUBT BNCC Platoon since the inception of the platoon. The cadets of BUBT BNCC Platoon are regular in their participation in different activities organized and arranged by BNCC.
        </p>
      </div>
      <div className="mb-8">
        <p>
          The motto of BNCC is "Knowledge & Discipline" with "The Volunteers" as its spirit. The objective of BNCC is to train the cadets in order to develop them as good citizens who can render their services to the nation as organized and disciplined volunteers during war and peace. BNCC provides cadets with various scopes that allow them to develop leadership, commandership, discipline, self-confidence, and good human qualities through a well-organized training process that includes a number of limited military and other professional training opportunities. During the tenure of cadetship, cadets have the following opportunities to avail and develop themselves as patriots, nationalists, and volunteers:
        </p>
        <ul className="list-disc pl-8">
          <li>7 days of Battalion Camping</li>
          <li>10 days of Regiment Camping</li>
          <li>12 days of Central Camping</li>
          <li>13 days of Camping and Joint Winter Exercise with the Armed Forces</li>
          <li>20 days of Camping for the Victory Day Parade</li>
          <li>28 days of National Camping and the Independence Day Parade</li>
          <li>Youth Exchange Program (YEP) with India, Nepal, Maldives, and Singapore; and so on</li>
        </ul>
      </div>
    </div>

    </>
  );
};

export default BangladeshNationalCadetCorps;
