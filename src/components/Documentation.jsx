import React from 'react';


const DocumentationPlaceHolder = () => {
  return (
    <div className="bg-cover bg-center h-screen flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center mb-12">
        <h1 className="text-6xl font-bold text-black mb-2" style={{fontFamily: 'Merriweather'}}>Documentation</h1>
      </div>
      <div className="flex flex-col justify-center items-center mb-12">
        <h1 className="text-4xl font-bold text-black mb-2" style={{fontFamily: 'Merriweather'}}>Placeholder</h1>
        <p className="text-black text-2xl text-center max-w-3xl" style={{fontFamily: 'Montserrat'}}>
          [Placeholder]
        </p>
      </div>
    </div>
  );
};



export default function Documentation() {
  return (
      <div className="Documentation">
        <DocumentationPlaceHolder />
      </div>
  );
};



