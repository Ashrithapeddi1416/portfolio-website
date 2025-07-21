import React from "react";
function Achievements() {
  return (
    <div className="col-span-9 bg-amber-100 overflow-y-scroll h-screen p-8">  
      <div className="flex items-center gap-6 mb-10">
        <div
          className="h-[100px] w-[100px] hidden sm:block rounded-full border-6 border-black bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://cdn-icons-png.flaticon.com/512/2972/2972196.png)",
          }}
        />
        <h1 className="text-6xl font-bold text-slate-900">Achievements</h1>
      </div>
      <div className="space-y-10">
        <div>
          <h2 className="text-4xl font-semibold text-slate-900">Minister for Magic</h2>
          <p className="text-2xl ml-6 mt-2 text-slate-800">
            Elected as the 36th Minister, spearheaded reform in magical law, equality, and governance.
          </p>
        </div>
        <div>
          <h2 className="text-4xl font-semibold text-slate-900">Founder, S.P.E.W.</h2>
          <p className="text-2xl ml-6 mt-2 text-slate-800">
            Established the Society for the Promotion of Elfish Welfare—advocating for underserved magical communities.
          </p>
        </div>
        <div>
          <h2 className="text-4xl font-semibold text-slate-900">Strategic Lead – Horcrux Operations</h2>
          <p className="text-2xl ml-6 mt-2 text-slate-800">
            Orchestrated mission-critical intelligence and artifact recovery during Voldemort’s downfall.
          </p>
        </div>
        <div>
          <h2 className="text-4xl font-semibold text-slate-900">Time-Turner Academic</h2>
          <p className="text-2xl ml-6 mt-2 text-slate-800">
            Completed a 12-subject curriculum in parallel using magical time management—setting a precedent for academic optimization.
          </p>
        </div>
        <div>
          <h2 className="text-4xl font-semibold text-slate-900">Dumbledore's Army Co-Founder</h2>
          <p className="text-2xl ml-6 mt-2 text-slate-800">
            Mobilized peer-led defense training and resistance leadership during a time of institutional suppression.
          </p>
        </div>
        <div>
          <h2 className="text-4xl font-semibold text-slate-900">Legal Technologist</h2>
          <p className="text-2xl ml-6 mt-2 text-slate-800">
            Championed digital reform in magical bureaucracy, focusing on transparency, ethical spell regulation, and system modernization.
          </p>
        </div>
      </div>
    </div>
  );
}
export default Achievements;



