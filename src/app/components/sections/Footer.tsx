import React from 'react';
import { GitHub, LinkedIn } from '@mui/icons-material';

const Footer: React.FC = () => {
  return (
    <footer className="mt-auto p-1 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-center items-center space-x-4">
          <a 
            href="https://github.com/bshongwe/headstarter_pantry-tracker" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white"
          >
            <GitHub className="hover:scale-150 transition-transform text-3xl" />
          </a>
          <a 
            href="https://linkedin.com/in/ernest-shongwe"
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white"
          >
            <LinkedIn className="hover:scale-150 transition-transform text-3xl" />
          </a>
        </div>
        <p className="text-center text-white mt-2 text-sm">
          &copy; {new Date().getFullYear()} Ernest B. Shongwe | Headstarter Software Engineering Fellowship Programme
        </p>
      </div>
    </footer>
  );
};

export default Footer;
