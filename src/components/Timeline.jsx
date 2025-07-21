import React from "react";

function Timeline() {
  return (
    <div className=" md:col-span-9  overflow-y-scroll h-screen ">
      <div className="bg-black rounded-3xl mt-4 text-white h-[120px] grid grid-rows-2">
        <h2 className="text-xl sm:text-2xl text-center mt-4">
          Year 1–7 at Hogwarts School of Witchcraft and Wizardry
        </h2>
        <p className="sm:text-xl mt-2 text-base text-center">
          Graduated with highest honors; completed advanced studies in
          Arithmancy, Ancient Runes, and Transfiguration
        </p>
      </div>
      <div className="bg-black rounded-3xl mt-4 text-white h-[120px] grid grid-rows-2">
        <h2 className="text-xl sm:text-2xl text-center mt-4">
          1995: Co-Founded Dumbledore’s Army
        </h2>
        <p className="sm:text-xl mt-2 text-base text-center">
          Established student-led defensive training group to resist oppressive
          regimes within Hogwarts.
        </p>
      </div>
      <div className="bg-black rounded-3xl mt-4 text-white h-[120px] grid grid-rows-2">
        <h2 className="text-xl sm:text-2xl text-center mt-4">
          1998: Strategic Lead, Horcrux Intelligence Operations
        </h2>
        <p className="sm:text-xl mt-2 text-base text-center">
          Led artifact recovery and intelligence coordination during the
          downfall of Lord Voldemort.
        </p>
      </div>
       <div className="bg-black rounded-3xl mt-4 text-white h-[120px] grid grid-rows-2">
        <h2 className="text-xl sm:text-2xl text-center mt-4">2000: Founded S.P.E.W.</h2>
        <p className="sm:text-xl mt-2 text-base text-center">
          Advocated for elf rights, initiated legislative outreach and public
          education campaigns..
        </p>
      </div>
      <div className="bg-black rounded-3xl mt-4 text-white h-[120px] grid grid-rows-2">
        <h2 className="text-xl sm:text-2xl text-center mt-4">
          2007: Appointed Minister for Magic (36th)
        </h2>
        <p className="sm:text-xl mt-2 text-base text-center">
          Spearheaded policy reform in magical governance, equality, and
          transparency..
        </p>
      </div>    
      <div className="bg-black rounded-3xl mt-4 text-white h-[120px] grid grid-rows-2">
        <h2 className="text-xl sm:text-2xl text-center mt-4">
          2012–Present: Legal Technologist & Reform Architect
        </h2>
        <p className="sm:text-xl mt-2 text-base text-center">
          Leading modernization of magical bureaucratic systems and spell
          regulation protocols.
        </p>
      </div>
    </div>
  );
}

export default Timeline;
