import React from "react";
import { Link } from "react-router-dom";

const Errorpage = () => {
  return (
    <div>
      

            <div className="mb-20 md:mb-0">

              <h1 className="text-xl flex items-center justify-center mt-8">Page Not Found...........</h1>
             <Link to="/">
              <button
                
              className="text-6xl font-serif border-2 rounded-xl text-center mx-auto mt-10 flex justify-center items-center text-red-700"
              >
                Go Back Home 
              </button>
             </Link>
            </div>

          </div>

        
    
  );
};

export default Errorpage;