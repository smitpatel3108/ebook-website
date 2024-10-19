import React from "react";
import bg from '../Assets/background.avif'
const HeroSection = () => {
  return (
    <section className="bg-cover bg-center h-[500px] flex items-center justify-center text-white" style={{ backgroundImage: `url(${bg})` }}>
      <div className="text-center">
        <h2 className="text-4xl font-bold">Discover Amazing E-books</h2>
        <p className="mt-4 text-lg">Read the latest e-books from your favorite genres.</p>
 
      </div>
    </section>
  );
};

export default HeroSection;
