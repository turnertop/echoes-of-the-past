import React from 'react';
import Poster from '../assets/Poster.png';


const TextWithImage = () => {
  return (
    <div className="flex flex-row items-center justify-center">
      <div className="w-1/2 p-8">
        <h1 className="text-3xl font-bold mb-4">Studio Tempus</h1>
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



const HeroSection = () => {
  return (
    <div className="bg-cover bg-center h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold text-black mb-4">Studio Tempus</h1>
      <p className="text-black text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ullamcorper dictum lobortis.</p>
      <button className="bg-gray text-black py-2 px-4 rounded mt-4 hover:bg-gray-200">Learn More</button>
    </div>); };

export default function Writeup() {
  return (
    <div className="Writeup">
      <HeroSection />
      <TextWithImage />
    </div>




  );
};

