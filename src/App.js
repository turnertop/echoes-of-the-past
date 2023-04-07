import React from 'react';
import "./App.css";
import Sample from './assets/Sample.mp4';
import { useRef } from 'react';
import { useEffect } from 'react';
import { Writeup } from './components';

export default function App() {

  const videoRef = useRef(null);

  useEffect(() => {
    const handleClick = () => {
      videoRef.current.play();
    };

    document.body.addEventListener("click", handleClick);

    return () => {
      document.body.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div className="App">
      {/*
      <header className="Header">
        <div className="Logo">
          Studio Tempus
        </div>
      </header>
      */}
      <main className="Main">
        <div className="videoContainer">
          <video ref={videoRef}>
            <source src={Sample} type="video/mp4" />
          </video>
          <div className="videoOverlay">
            <h1>Echoes Of The Past</h1>
            <p>An immersive art installation</p>
          </div>
        </div>
        <div className="aboutSection">
          <h2>About</h2>
          <p>Our immersive art installation explores the experience of losing memories to Alzheimer's disease. By creating interactive displays and experiences, visitors can experience the different stages of the disease and explore the complex emotions associated with it. The installation is designed to engage the senses and emotions of the audience, allowing them to reflect on their own experiences with memory and consider the impact of Alzheimer's on individuals, families, and society. Our piece aims to foster a deeper understanding and empathy for those affected by Alzheimer's, and to inspire action and support for research and care for the condition.</p>
        </div>
        <div className="exhibitionHistorySection">
          <h2>Exhibition History</h2>
          <ul>
            <li>Simon Fraser University Spring 2023 IAT 222 Final Exhibition</li>
          </ul>
        </div>
      </main>
      <div style={{ position: 'relative'}}>
  <div style={{ position: 'absolute', top: 0, left: 0, zIndex: 1 }}>
    This is the overlapping div
  </div>
</div>



      <Writeup />
    </div>
  );
}


/*

import React from 'react';
import "./App.css";
import Sample from './assets/Sample.mp4';
import { useRef } from 'react';
import { useEffect } from 'react';


export default function App() {

    const videoRef = useRef(null);
    
    useEffect(() => {
      const handleClick = () => {
        videoRef.current.play();
      };
      
      document.body.addEventListener("click", handleClick);

      return () => {
        document.body.removeEventListener("click", handleClick);
      };
    }, []);




  return (
    <div className="App">
      <header className="Header">
        <div className="Logo">
          Studio Tempus
        </div>
        <nav className="Nav">

        </nav>

      </header>
<main className="Main">

  <div style={{ position: 'relative' }}>
    <div className="videoContainer">
      <video ref={videoRef}>
        <source src={Sample} type="video/mp4" />
      </video>
    </div>

    <div>
      <h1 style={{ margin: 0 }}>Echoes Of The Past</h1>
      <p style={{ margin: 0 }}>An immersive art installation</p>
    </div>
  </div>

  <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', padding: '1rem' }}>
    <div style={{ flexBasis: '50%' }}>
      <h2>About</h2>
      <p>Our immersive art installation explores the experience of losing memories to Alzheimer's disease. By creating interactive displays and experiences, visitors can experience the different stages of the disease and explore the complex emotions associated with it. The installation is designed to engage the senses and emotions of the audience, allowing them to reflect on their own experiences with memory and consider the impact of Alzheimer's on individuals, families, and society. Our piece aims to foster a deeper understanding and empathy for those affected by Alzheimer's, and to inspire action and support for research and care for the condition.</p>
    </div>
    <div style={{ flexBasis: '50%' }}>
      <h2>Exhibition History</h2>
      <ul>
        <li>Simon Fraser University Spring 2023 IAT 222 Final Exhibition</li>
      </ul>
    </div>
  </div>

  <article className="Article">
    <figure className="Figure">

    </figure>
    <p className="Paragraph">

    </p>
  </article>

  <section className="Section">

  </section>
</main>



{
  /*
      <main className="Main">

        <div className="videoContainer">
          <video ref={videoRef}>
            <source src={Sample} type="video/mp4" />
          </video>
        </div>


        <div>
        <h1 style={{ margin: 0 }}>Echoes Of The Past</h1>
        <p style={{ margin: 0 }}>An immersive art installation</p>
        </div>

      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', padding: '1rem' }}>
        <div style={{ flexBasis: '50%' }}>
          <h2>About</h2>
          <p>Our immersive art installation explores the experience of losing memories to Alzheimer's disease. By creating interactive displays and experiences, visitors can experience the different stages of the disease and explore the complex emotions associated with it. The installation is designed to engage the senses and emotions of the audience, allowing them to reflect on their own experiences with memory and consider the impact of Alzheimer's on individuals, families, and society. Our piece aims to foster a deeper understanding and empathy for those affected by Alzheimer's, and to inspire action and support for research and care for the condition.</p>
        </div>
        <div style={{ flexBasis: '50%' }}>
          <h2>Exhibition History</h2>
          <ul>
            <li>Simon Fraser University Spring 2023 IAT 222 Final Exhibition</li>
          </ul>
        </div>
      </div>
        <article className="Article">
          <figure className="Figure">

          </figure>
          <p className="Paragraph">

          </p>
        </article>
        <section className="Section">

        </section>
      </main>
      */

