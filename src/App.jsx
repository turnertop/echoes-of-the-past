import { Hero, Writeup, DetailedAnalysis, Documentation } from './components';
import { motion } from "framer-motion";
import { useState } from 'react';
/*
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useRef } from 'react';
*/

export default function App() {

  const [globalState, setGlobalState] = useState(0)

if (globalState === 0) {
  return (
    <div className="appVideo">
      <Hero />
      <button onClick={() => setGlobalState(globalState + 1)} className="w-full h-full">
        Enter
      </button>
    </div>

  );

} else if (globalState === 1) {
  return (
  
    <div>
      <Writeup />
      <DetailedAnalysis />
      <Documentation />
    </div>



  );
};

};






