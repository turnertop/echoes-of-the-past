import React from 'react';

const About = () => {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl mb-4 font-bold text-gray-800">
              About Our Company
            </h2>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
              risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing
              nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas
              ligula massa, varius a, semper congue, euismod non, mi.
            </p>
            <p className="text-gray-600 mb-4">
              Proin porttitor, orci nec nonummy molestie, enim est eleifend
              mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu
              massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque
              congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum
              bibendum augue. Praesent egestas leo in pede.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <img
              className="h-auto w-full"
              src="https://via.placeholder.com/600x400"
              alt="About our company"
            />
          </div>
        </div>
      </div>
    </section>
  );
};




export default function Writeup() {
  return (
  <div className="">
    <About />    

  </div>


  );


};
