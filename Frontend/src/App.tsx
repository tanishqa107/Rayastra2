import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";

import {
  IconBrandGmail,
  IconBrandWhatsapp,
} from "@tabler/icons-react";

import "./App.css";

const App = () => {
  return (
    <>
    <div className="overflow-x-hidden">

      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');

          body, html {
            font-family: 'Poppins', sans-serif;
            overflow-x: hidden;
          }
        `}
      </style>

      {/* Sticky Social Icons */}
      <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-50 space-y-4 pr-2">
        {/* WhatsApp */}
        <div className="group relative flex items-center">
          <a
            href="https://wa.link/oa5tj4"
            target="_blank"
            rel="noopener noreferrer"
            className="block hover:scale-110 transition-transform"
          >
            <IconBrandWhatsapp size={46} color="#25D366" />
          </a>
          <div className="absolute right-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white text-black text-sm px-3 py-1 rounded shadow-md whitespace-nowrap">
            +91 8708967009
          </div>
        </div>

        {/* Gmail */}
        <div className="group relative flex items-center">
          <a
            href="mailto:rayastra.online@gmail.com"
     
            className="block hover:scale-110 transition-transform"
          >
            <IconBrandGmail size={46} color="#EA4335" />
          </a>
          <div className="absolute right-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white text-black text-sm px-3 py-1 rounded shadow-md whitespace-nowrap">
            rayastra.online@gmail.com
          </div>
        </div>
      </div>

      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
      </div>
    </>
    
  );
};

export default App;
