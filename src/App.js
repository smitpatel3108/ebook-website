import './App.css';
import React from "react";
import Header from "./Pages/Header";
import HeroSection from "./Pages/HeroSection";
import BooksSection from "./Pages/BooksSection";
import Footer from "./Pages/Footer";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header/>
      <main className="flex-grow">
        <HeroSection />
        <BooksSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;

