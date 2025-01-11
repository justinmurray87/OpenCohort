import React, { useState } from 'react';
import { LineChart, Menu, X } from 'lucide-react';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="container mx-auto px-6 py-4 relative">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <LineChart className="h-8 w-8 text-white" />
          <span className="text-white text-xl font-bold">OpenCohort</span>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden lg:flex space-x-6">
          <a href="#features" className="text-white hover:text-blue-200">Features</a>
          <a href="#community" className="text-white hover:text-blue-200">Community</a>
          <a href="#getting-started" className="text-white hover:text-blue-200">Get Started</a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu}
          className="block lg:hidden text-white hover:text-blue-200"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`
        fixed inset-y-0 right-0 w-64 bg-blue-700 transform transition-transform duration-300 ease-in-out
        ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
        lg:hidden
        flex flex-col pt-20 px-6 shadow-lg
      `}>
        <a 
          href="#features" 
          className="text-white hover:text-blue-200 py-3 border-b border-blue-600"
          onClick={toggleMenu}
        >
          Features
        </a>
        <a 
          href="#community" 
          className="text-white hover:text-blue-200 py-3 border-b border-blue-600"
          onClick={toggleMenu}
        >
          Community
        </a>
        <a 
          href="#getting-started" 
          className="text-white hover:text-blue-200 py-3"
          onClick={toggleMenu}
        >
          Get Started
        </a>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 lg:hidden"
          onClick={toggleMenu}
          aria-hidden="true"
        />
      )}
    </nav>
  );
}