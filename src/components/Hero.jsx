import React from 'react';
import Sample from '../assets/Sample.mp4';
import { useState, useEffect, useRef } from "react";
import Poster from '../assets/Poster.png';

const Video = () => {
  const [isPlaying, setIsPlaying] = useState(true);

  const handleVideoClick = () => {
    setIsPlaying(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset >= 600) {
        setIsPlaying(false);
      } else {
        setIsPlaying(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="relative h-screen">
      <div
        className={`absolute top-0 left-0 w-full h-full ${
          isPlaying ? "opacity-0" : "opacity-100 bg-black"
        }`}
      ></div>
      {isPlaying && (
        <video
          className="w-full h-full object-cover absolute top-0 left-0 z-0"
          autoPlay
          loop
          muted
        >
          <source src={Sample} type="video/mp4" />
        </video>
      )}

      {!isPlaying && (
        <div
          className="w-full h-full absolute top-0 left-0 z-10"
          onClick={handleVideoClick}
        >
          <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={Sample} type="video/mp4" />
          </video>
        </div>
      )}

      <div className="relative z-10 flex flex-col justify-center items-center h-full">
        <h1 className="text-5xl font-semibold text-white mb-4">
          Echoes Of The Past
        </h1>
        <p className="text-white font-extralight text-xl">
          An immersive art installation
        </p>
      </div>
    </section>
  );
};



/* Most Stable Patch (autoPlays, onScroll it stops the video) Apr 7 2023 336pm
const Video = () => {
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset >= 600) {
        setIsPlaying(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="relative h-screen">
      <div
        className={`absolute top-0 left-0 w-full h-full ${
          isPlaying ? "opacity-0" : "opacity-100 bg-black"
        }`}
      ></div>
      {isPlaying && (
        <video
          className="w-full h-full object-cover absolute top-0 left-0 z-0"
          autoPlay
          loop
          muted
        >
          <source src={Sample} type="video/mp4" />
        </video>
      )}

      <div
        className="relative z-10 flex flex-col justify-center items-center h-full"
        style={{ cursor: "pointer" }}
      >
        <h1 className="text-5xl font-semibold text-white mb-4">
          Echoes Of The Past
        </h1>
        <p className="text-white font-extralight text-xl">
          An immersive art installation
        </p>
      </div>
    </section>
  );
};
*/

/* Autoplay Muted for GChrome w/o Scrolling Disable Though
const Video = () => {
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset >= 600) {
        setIsPlaying(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="relative h-screen">
      <div
        className={`absolute top-0 left-0 w-full h-full ${
          isPlaying ? "opacity-0" : "opacity-100 bg-black"
        }`}
      ></div>
      {isPlaying && (
        <video
          className="w-full h-full object-cover absolute top-0 left-0 z-0"
          autoPlay
          loop
          muted
        >
          <source src={Sample} type="video/mp4" />
        </video>
      )}

      <div
        className="relative z-10 flex flex-col justify-center items-center h-full"
        style={{ cursor: "pointer" }}
      >
        <h1 className="text-5xl font-semibold text-white mb-4">
          Echoes Of The Past
        </h1>
        <p className="text-white font-extralight text-xl">
          An immersive art installation
        </p>
      </div>
    </section>
  );
};
*/

/* Stable Apr 7 2023
const Video = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleVideoClick = () => {
    setIsPlaying(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset >= 600) {
        setIsPlaying(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="relative h-screen">
      <div
        className={`absolute top-0 left-0 w-full h-full ${
          isPlaying ? "opacity-0" : "opacity-100 bg-black"
        }`}
      ></div>
      {isPlaying && (
        <video
          className="w-full h-full object-cover absolute top-0 left-0 z-0"
          autoPlay
          loop
        >
          <source src={Sample} type="video/mp4" />
        </video>
      )}

      <div
        className="relative z-10 flex flex-col justify-center items-center h-full"
        onClick={handleVideoClick}
        style={{ cursor: "pointer" }}
      >
        <h1 className="text-5xl font-semibold text-white mb-4">
          Echoes Of The Past
        </h1>
        <p className="text-white font-extralight text-xl">
          An immersive art installation
        </p>
      </div>
    </section>
  );
};
*/




/*
const Video = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handleVideoClick = () => {
    setIsPlaying(true);
  };

  const handleScroll = () => {
    if (videoRef.current) {
      const videoTop = videoRef.current.getBoundingClientRect().top;
      if (videoTop < 0 || videoTop > window.innerHeight) {
        setIsPlaying(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="relative h-screen">
      <div
        className={`absolute top-0 left-0 w-full h-full ${
          isPlaying ? "opacity-0" : "opacity-100 bg-black"
        }`}
      ></div>
      {isPlaying && (
        <video
          className="w-full h-full object-cover absolute top-0 left-0 z-0"
          autoPlay
          loop
          ref={videoRef}
        >
          <source src={Sample} type="video/mp4" />
        </video>
      )}

      <div
        className="relative z-10 flex flex-col justify-center items-center h-full"
        onClick={handleVideoClick}
        style={{ cursor: "pointer" }}
      >
        <h1 className="text-5xl font-semibold text-white mb-4">
          Echoes Of The Past
        </h1>
        <p className="text-white font-extralight text-xl">
          An immersive art installation
        </p>
      </div>
    </section>
  );
};
*/



/* Working Stable
const Video = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleVideoClick = () => {
    setIsPlaying(true);
  };

  return (
    <section className="relative h-screen">
      <div
        className={`absolute top-0 left-0 w-full h-full ${
          isPlaying ? "opacity-0" : "opacity-100 bg-black"
        }`}
      ></div>
      {isPlaying && (
        <video
          className="w-full h-full object-cover absolute top-0 left-0 z-0"
          autoPlay
          loop
        >
          <source src={Sample} type="video/mp4" />
        </video>
      )}

      <div
        className="relative z-10 flex flex-col justify-center items-center h-full"
        onClick={handleVideoClick}
        style={{ cursor: "pointer" }}
      >
        <h1 className="text-5xl font-semibold text-white mb-4">
          Echoes Of The Past
        </h1>
        <p className="text-white font-extralight text-xl">
          An immersive art installation
        </p>
      </div>
    </section>
  );
};
*/


/* Initial Draft
const Video = () => {
  return (
    <section className="relative h-screen">
      <video
        className="w-full h-full object-cover absolute top-0 left-0 z-0"
        autoPlay
        loop
      >
        <source src={Sample} type="video/mp4" />
      </video>


      <div className="relative z-10 flex flex-col justify-center items-center h-full">
        <h1 className="text-5xl font-semibold text-white mb-4">
          Echoes Of The Past
        </h1>
        <p className="text-white font-extralight text-xl">
          An immersive art installation
        </p>
      </div>
    </section>
  );
};
*/

/* Moved these two components into Writeup.JSX because it's more appropriate
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
    */



export default function Hero() {
  return (
    <div className="Hero">
      <Video />
    </div>
  );
};



