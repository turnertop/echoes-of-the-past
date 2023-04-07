import React from 'react';


const PhilosophicalConceptual = () => {
  return (
    <div className="bg-cover bg-center h-screen flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center mb-12">
        <h1 className="text-6xl font-bold text-black mb-2" style={{fontFamily: 'Merriweather'}}>Detailed Analysis</h1>
      </div>
      <div className="flex flex-col justify-center items-center mb-12">
        <h1 className="text-4xl font-bold text-black mb-2" style={{fontFamily: 'Merriweather'}}>400-650 words</h1>
        <p className="text-black text-2xl text-center max-w-3xl" style={{fontFamily: 'Montserrat'}}>
          Discussion of philosophical and conceptual goals for the artwork, explanations on how the interaction work and why that interactive model is effective (can include interaction diagram, installation diagrams and so on), analysis on how work connects with broader art context of art history and other artists' work (expand on explanation on how work relates to readings and concepts introduced in class and artists that are relevant to our work)
        </p>
      </div>
    </div>
  );
};




export default function DetailedAnalysis() {
  return (
    <div className="">
    <PhilosophicalConceptual />
    </div>



  );
};

