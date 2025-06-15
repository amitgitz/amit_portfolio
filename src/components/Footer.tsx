import React from 'react';
import { Heart, Server, Cloud } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Server className="h-6 w-6 text-cyan-400" />
            <Cloud className="h-5 w-5 text-emerald-400" />
            <span className="text-xl font-bold text-white">Amit Choudhary</span>
          </div>
          
          <p className="text-gray-400 mb-4">
            DevOps Engineer specializing in cloud infrastructure and automation
          </p>
          
          <div className="flex items-center justify-center text-gray-400 text-sm">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-500 mx-2 animate-pulse" />
            <span>by Amit Choudhary © {new Date().getFullYear()}</span>
          </div>
          
          <div className="mt-4 text-xs text-gray-500">
            Built with React, TypeScript, and Tailwind CSS
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;