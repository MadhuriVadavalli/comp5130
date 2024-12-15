import React from 'react';
import BannerCard from '../home/BannerCard';

const Banner = () => {
  return (
    
    <div
      // Background image added here
      className="px-4 lg:px-24 flex flex-col items-center bg-[url('C:/IWS/client/src/assets/bookbackground.png')] bg-cover bg-center"
    >
     
      <div className="flex flex-col md:flex-row justify-between items-center gap-12 py-40 w-full">
        {/* Left side */}
        <div className="md:w-1/2 space-y-8 h-full">
          <h2 className="text-3xl font-bold leading-snug text-blue-700">
          Seamlessly manage books with efficient updates <span className="text-blue-700">and organized inventory</span>
          </h2>
          <p className="md:w-4/5 font-bold">
            Explore a vast collection of books across all genres at BookStore. Discover your next favorite read today!
          </p>
        </div>

        {/* Right side */}
        <div>
          <BannerCard />
        </div>
      </div>
    </div>
    
  );
};

export default Banner;





    