import { Hero, Writeup, DetailedAnalysis, Documentation } from './components';
import { motion } from "framer-motion";
/*
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useRef } from 'react';
*/

export default function App() {
{/* 0-1 framer-motion 0-2 webdev
  const writeupRef = useRef();
  const writeupAnimation = useAnimation();
  const { ref: writeupInViewRef, inView: writeupInView } = useInView();
  
  const { ref: detailedAnalysisRef, inView: detailedAnalysisInView } = useInView();
  const detailedAnalysisAnimation = useAnimation();

  const { ref: documentationRef, inView: documentationInView } = useInView();
  const documentationAnimation = useAnimation();

  useEffect(() => {
    if (writeupInView) {
      writeupAnimation.start({
        opacity: 1,
        y: 0,
        transition: { duration: 1 },
      });
    }
  }, [writeupAnimation, writeupInView]);

  useEffect(() => {
    if (detailedAnalysisInView) {
      detailedAnalysisAnimation.start({
        opacity: 1,
        y: 0,
        transition: { duration: 1 },
      });
    }
  }, [detailedAnalysisAnimation, detailedAnalysisInView]);

  useEffect(() => {
    if (documentationInView) {
      documentationAnimation.start({
        opacity: 1,
        y: 0,
        transition: { duration: 1 },
      });
    }
  }, [documentationAnimation, documentationInView]);
  */}
  return (
    <div className="App">
      <Hero />
{/*
      <motion.div
          ref={writeupRef}
          initial={{ opacity: 0, y: 50 }}
          animate={writeupAnimation}
          transition={{ duration: 1 }}
      >
      */}
      <Writeup />
{/*
      </motion.div>
      */}
{/*
      <motion.div
          ref={detailedAnalysisRef}
          initial={{ opacity: 0, y: 50 }}
          animate={detailedAnalysisAnimation}
          transition={{ duration: 1 }}
      >
      */}
      <DetailedAnalysis />
{/*
      </motion.div>
      */}
{/*
      <motion.div
          ref={documentationRef}
          initial={{ opacity: 0, y: 50 }}
          animate={documentationAnimation}
          transition={{ duration: 1 }}
      >
      */}
      <Documentation />
{/*
      </motion.div>
      <div ref={writeupInViewRef} />
      */}
    </div>

  );
};

