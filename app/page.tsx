"use client";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Logo from "@/components/logo"; // Importation du logo
import React, { useState, useEffect } from 'react';

// Composant pour l'alternance d'images
const ImageSection: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    "/image1.png.jpg", // Première image
    "/image2.png"  // Deuxième image
  ];

  useEffect(() => {
    // Change d'image toutes les secondes
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 20000); // 1000 ms = 1 seconde

    // Clean up l'intervalle lorsqu'on quitte la page
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex-1 flex justify-center items-center">
      <img
        src={images[currentImage]}
        alt="Hero Image"
        className="w-full max-w-xs md:max-w-md lg:max-w-full h-auto object-cover rounded-lg shadow-lg"
      />
    </div>
  );
};

export default function Home() {
  return (
    <main className="flex flex-col h-[100vh] w-full">
      <Navbar className="" />
      <div
        className="flex flex-1 items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/background1.jpg')" }}
      >
        {/* Section Hero */}
        <div className="flex flex-col md:flex-row w-full max-w-7xl mx-auto gap-8 p-6">
          {/* Section gauche : Bienvenue et Logo */}
          <div className="flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Bienvenue sur Notre Plateforme!
            </h1>
            {/* Insertion du composant Logo */}
            <div className="mt-2 text-[36px] md:text-[40px] font-extrabold">
              <p className="flex flex-col gap-0 font-bold text-3xl md:text-4xl">
                Gabon
                <span className="ml-4 text-[#228B22]">
                  Connected
                </span>
              </p>
            </div>
            <p className="text-sm md:text-lg text-white mt-4">
              Accédez à des solutions fiables et des données exactes, pour un quotidien plus serein.
              Ensemble, transformons chaque interaction en une opportunité de créer quelque chose d’exceptionnel.
            </p>
          </div>
          {/* Section droite : Image */}
          <ImageSection />
        </div>
      </div>
      <Footer className="" />
    </main>
  );
}
