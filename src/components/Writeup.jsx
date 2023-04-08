import React from 'react';
import Poster from '../assets/Poster.png';
import Bios from '../assets/Bios.png';
import biosSVG from '../assets/biosSVG.svg';


const TextWithImage = () => {
  return (
    <div className="flex flex-row items-center justify-center">
      <div className="w-1/2 p-8">
        <h1 className="text-3xl font-bold mb-4">Studio Tempus [Placeholder]</h1>
        <p className="text-gray-700 text-base">
          IAT 222 D100 Interactive Arts Final Project Exhibition
        </p>
      </div>
      <div className="w-1/3 object-contain">
        <img src={Poster} alt="Poster" />
      </div>
    </div>
  );
};
/*
const DetailedAnalysis = () => {
  return (
    <div className="">


    </div>



  );
};
*/

const HeroSection = () => {
  return (
    <div className="bg-cover bg-center h-screen flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center mb-12">
        <h1 className="text-6xl font-bold text-black mb-2" style={{fontFamily: 'Merriweather'}}>Bios</h1>
      </div>
      <div className="flex flex-col justify-center items-center mb-12">
        <h1 className="text-4xl font-bold text-black mb-2" style={{fontFamily: 'Merriweather'}}>Studio Tempus</h1>
        <p className="text-black text-2xl text-center max-w-3xl" style={{fontFamily: 'Montserrat'}}>
          Our art collective is known as Studio Tempus and some of us have experienced the heart-wrenching effects of dementia. We are determined to bring awareness of this disease and create an immersive installation artwork that transports you into the world of a patient with dementia in the third stage of Alzheimer's. Our hope is to provide a meaningful and emotional experience that leaves a lasting impact on those who experience it.
        </p>
      </div>
    </div>
  );
};


/*
// testing design feature for a giant text logo of Bios but struggling
const TestSection = () => {
  return (
<section class="relative">
  <img src={Bios} alt="Image" className="absolute bottom-0 left-0 h-20 w-20" />
</section>


  );
};
*/



/* text is white fuck
const HeroSection = () => {
  return (
    <div className="bg-cover bg-center h-screen flex flex-col justify-center items-center">
      <div className="flex flex-row justify-between items-center w-full px-10">
        <div className="text-left">
          <h1 className="text-4xl font-bold text-white mb-4">Bios</h1>
          <h1 className="text-4xl font-bold text-white mb-4">Studio Tempus</h1>
        </div>
        <p className="text-white text-xl max-w-lg">
          Our art collective is known as Studio Tempus and some of us have experienced the heart-wrenching effects of dementia. We are determined to bring awareness of this disease and create an immersive installation artwork that transports you into the world of a patient with dementia in the third stage of Alzheimer's. Our hope is to provide a meaningful and emotional experience that leaves a lasting impact on those who experience it.
        </p>
      </div>
      <div className="mt-10 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white hover:text-gray-300 cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M3.293 6.293a1 1 0 011.414 0L10 10.586l5.293-5.293a1 1 0 011.414 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
        <span className="text-white ml-2 cursor-pointer hover:text-gray-300">Watch Our Trailer</span>
      </div>
    </div>
  );
};
*/

/*
const HeroSection = () => {
  return (
    <div className="bg-cover bg-center h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold text-black mb-4">Bios</h1>
      <div className="flex flex-row items-center w-full px-10">
        <h1 className="text-4xl font-bold text-black mr-6">Studio Tempus</h1>
        <p className="text-black text-xl max-w-lg">
          Our art collective is known as Studio Tempus and some of us have experienced the heart-wrenching effects of dementia. We are determined to bring awareness of this disease and create an immersive installation artwork that transports you into the world of a patient with dementia in the third stage of Alzheimer's. Our hope is to provide a meaningful and emotional experience that leaves a lasting impact on those who experience it.
        </p>
      </div>
      <button className="bg-gray text-black py-2 px-4 rounded mt-4 hover:bg-gray-200">Learn More</button>
    </div>
  );
};
*/


/* BIOS and StudioTempus on left and the paragraph on the right
const HeroSection = () => {
  return (
    <div className="bg-cover bg-center h-screen flex flex-col justify-center items-center">
      <div className="flex flex-row justify-between items-center w-full px-10">
        <div className="text-left">
          <h1 className="text-4xl font-bold text-black mb-4">Bios</h1>
          <h1 className="text-4xl font-bold text-black mb-4">Studio Tempus</h1>
        </div>
        <p className="text-black text-xl max-w-lg">
          Our art collective is known as Studio Tempus and some of us have experienced the heart-wrenching effects of dementia. We are determined to bring awareness of this disease and create an immersive installation artwork that transports you into the world of a patient with dementia in the third stage of Alzheimer's. Our hope is to provide a meaningful and emotional experience that leaves a lasting impact on those who experience it.
        </p>
      </div>
    </div>
  );
};
*/

/* bad formatting initial prototype
const HeroSection = () => {
  return (
    <div className="bg-cover bg-center h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold text-black mb-4">Bios</h1>
      <h1 className="text-4xl font-bold text-black mb-4">Studio Tempus</h1>
      <p className="text-black text-xl">
      Our art collective is known as Studio Tempus and some of us have experienced the heart-wrenching effects of dementia. We are determined to bring awareness of this disease and create an immersive installation artwork that transports you into the world of a patient with dementia in the third stage of Alzheimer's. Our hope is to provide a meaningful and emotionalexperience that leaves a lasting impact on those who experience it.
      </p>
      <button className="bg-gray text-black py-2 px-4 rounded mt-4 hover:bg-gray-200">Learn More</button>
    </div>); };
    */


/* B and S cut off
const BiosSection = () => {
  return (
    <section className="relative h-screen">
      <div className="absolute bottom-0 left-0 w-full h-full">
        <img src={biosSVG} alt="BIOS" className="object-cover w-1/2 h-1/2" />
      </div>
      <div className="absolute bottom-0 left-0 w-full h-full flex flex-col justify-end items-start p-10 text-white">
      </div>
    </section>
  );
};
*/


/* initial prototype for biosSection but too big for Bios Logo
const BiosSection = () => {
  return (
    <section className="relative h-screen">
      <div className="absolute bottom-0 left-0 w-full h-full">
        <img src={biosSVG} alt="BIOS" className="object-cover w-full h-full" />
      </div>
      <div className="absolute bottom-0 left-0 w-full h-full flex flex-col justify-end items-start p-10 text-white">
      </div>
    </section>
  );
};
*/

export default function Writeup() {
  return (
    <div className="Writeup">
      <HeroSection />
      <TextWithImage />

    </div>




  );
};

