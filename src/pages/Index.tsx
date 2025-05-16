
import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Download, QrCode, Users, Star, Gift } from "lucide-react";
import QRCodeDisplay from "@/components/QRCodeDisplay";
import FeatureCard from "@/components/FeatureCard";
import AppScreenshot from "@/components/AppScreenshot";
import Footer from "@/components/Footer";
import GameCarousel from "@/components/GameCarousel";
import FlyingCards from "@/components/FlyingCards";
import { toast } from "sonner";
import { apkDownloadUrl } from "@/lib/utils";
import Aos from "aos";
import "aos/dist/aos.css";


const Index = () => {
  useEffect(() => {
    Aos.init({
      duration: 2000,
      offset: 0,
    });
  }, []);

  const handleDownloadClick = () => {
    window.open(apkDownloadUrl, "_blank");
    toast.success("Download started!", {
      description: "Thank you for downloading Há Cartas!",
    });
  };

  const handleQRCodeClick = () => {
    toast.info("Scan with your phone camera", {
      description: "Point your camera at the QR code below to download the app",
    });
  };

  return (
    <div className="min-h-screen bg-[#FDF0D5] text-[#003049] flex flex-col">
      {/* Flying card animations in the background */}
      <FlyingCards />

      {/* Header Section */}
      <header className="w-full py-6 px-4 md:px-10 lg:px-20 flex justify-between items-center">
        <div className="flex items-center">
          <div className="w-10 h-10 bg-[#003049] rounded-full flex items-center justify-center">
            <span className="text-white text-lg font-bold">HC</span>
          </div>
          <h1 className="ml-3 text-xl md:text-2xl font-bold text-[#003049]">Há Cartas?</h1>
        </div>
      </header>

      {/* Hero Section */}
      <section className="w-full py-10 px-4 md:px-10 lg:px-20 flex flex-col md:flex-row items-center justify-between">
        <div className="w-full md:w-1/2 mb-10 md:mb-0">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-[#003049] animate-fade-in">
            Make memories anywhere
          </h2>
          <p className="text-lg md:text-xl mb-8 text-[#054D72]">
            Play traditional Portuguese card games with friends and family using augmented reality technology. No physical cards needed, just your phone.
          </p>
                    <blockquote>
            <p className="text-lg mb-8 font-bold italic">
              Download to try the Beta experience
            </p>
          </blockquote>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
            data-aos="fade-right"
              onClick={handleDownloadClick}
              className="bg-[#054D72] hover:bg-[#003049] text-white px-6 py-6 rounded-md flex items-center justify-center hover:scale-105 transition-transform duration-300"
            >
              <Download className="mr-2" />
              Download APK
            </Button>
            <Button 
             data-aos="fade-up"
              variant="outline" 
              onClick={handleQRCodeClick}
              className="border-[#054D72] text-[#054D72] hover:bg-[#054D72] hover:text-white px-6 py-6 rounded-md flex items-center justify-center hover:scale-105 transition-transform duration-300"
            >
              <QrCode className="mr-2" />
              Scan QR Code
            </Button>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <AppScreenshot />
        </div>
      </section>

      {/* Game Carousel Section */}
      <section className="w-full py-12 px-4 md:px-10 lg:px-20 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#003049]">Game Collection</h2>
          <p className="text-lg mb-8 text-[#054D72]">
            Explore our collection of traditional Portuguese card games, all available in your pocket.
          </p>
          <GameCarousel />
        </div>
      </section>

      {/* About Section */}
      <section className="w-full py-12 px-4 md:px-10 lg:px-20 bg-[#FDF0D5]" data-aos="fade-up"
     data-aos-duration="3000">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#003049]">About Há Cartas?</h2>
          <p className="text-lg mb-8 text-[#054D72]">
            "Há Cartas?" is a startup project born from the desire to revive the emotional depth and human connection found in traditional card games. In an increasingly digital world, we aim to create a tangible, nostalgic, and meaningful experience through our game application.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 px-4 md:px-10 lg:px-20" data-aos="fade-up"
     data-aos-duration="3000">
        <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center text-[#003049]">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard 
            icon={<Users size={32} />} 
            title="Play Anywhere"
            description="Use only your phones to play traditional card games without the need for a physical deck."
          />
          <FeatureCard 
            icon={<Star size={32} />} 
            title="Customization" 
            description="Enjoy effects, skins customization, power-ups and commentators describing the game."
          />
          <FeatureCard 
            icon={<Gift size={32} />} 
            title="Card Packs" 
            description="Collect and open card packs to unlock new skins and game content."
          />
        </div>
      </section>

      {/* Download Section */}
      <section className="w-full py-12 px-4 md:px-10 lg:px-20 bg-[#003049] text-white" data-aos="fade-up"
     data-aos-duration="3000">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Download Now</h2>
          <p className="text-lg mb-8 text-center">
            Experience the joy of traditional card games with a modern twist. Get Há Cartas? on your device now.
          </p>
          <blockquote>
            <p className="text-lg mb-8 text-center font-bold italic">
              Download to try the Beta experience
            </p>
          </blockquote>
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="flex flex-col items-center">
              <Button 
                onClick={handleDownloadClick}
                className="bg-white hover:bg-gray-100 text-[#003049] px-6 py-6 mb-4 rounded-md flex items-center justify-center hover:scale-105 transition-transform duration-300"
              >
                <Download className="mr-2" />
                Download APK
              </Button>
              <p className="text-sm text-gray-300">Direct download (Android only)</p>
            </div>
            <Separator className="hidden md:block h-20 w-px bg-gray-500" />
            <div className="flex flex-col items-center">
              <div className="hover:scale-105 transition-transform duration-300">
                <QRCodeDisplay />
              </div>
              <p className="text-sm text-gray-300 mt-4">Scan with your camera</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      {/* <Footer /> */}
    </div>
  );
};

export default Index;
