import React from "react";

function About() {
  return (
    <div className="md:col-span-9 bg-blue-100 py-4 px-6">
      
      <div className="text-center text-slate-900 text-3xl mb-4">
        Rewriting the rules with logic, leadership, and a little magic...
      </div>

      <div className="flex flex-row items-center gap-8">
       
        <div
          style={{
            backgroundImage:
              "url(/main/hermione.jpeg)",
          }}
          className="w-1/2 h-[550px] bg-cover bg-center rounded-2xl shadow-lg"
        ></div>

        <div className="w-1/2 text-slate-900 text-lg leading-relaxed">
        <h2 className="text-5xl font-extrabold">Minister of Magic</h2>
          <h3 className="text-2xl font-semibold mt-4 mb-4">
            Leading with vision, wisdom, and unwavering integrity.
          </h3>
          <p>
            Leading with vision, wisdom, and unwavering integrity is more than a tagline—it’s how I approach every challenge I face. As the 36th Minister for Magic, I've devoted my career to modernizing wizarding governance and advocating for justice in every corner of our world.
Whether I'm drafting equitable policies, dismantling outdated systems, or empowering the next generation of magical leaders, I believe intellect must be paired with empathy. Reform begins with knowledge—and change demands courage.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;