import React from "react";
import './styles.css'

const Loader = (props) => {
  return (
    <div
    wireloading="true"
      className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-gray-700 opacity-75 flex flex-col items-center justify-center"
    >
      <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></div>
      <h2 className="text-center text-white text-xl font-semibold">Fetching offers...</h2>
      <div className="text-center text-white flex flex-row items-center">
        
      <img id='w' src="w.png" alt="we"/><span>e are working to make your weekend unforgettable! :)</span>
      </div>
    </div>
  );
};


export default Loader;
