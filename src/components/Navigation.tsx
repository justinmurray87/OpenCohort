import React from 'react';
import { LineChart } from 'lucide-react';

export function Navigation() {
  return (
    <nav className="container mx-auto px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <LineChart className="h-8 w-8 text-white" />
          <span className="text-white text-xl font-bold">OpenCohort</span>
        </div>
        <div className="flex space-x-6">
          <a href="#features" className="text-white hover:text-blue-200">Features</a>
          <a href="#community" className="text-white hover:text-blue-200">Community</a>
          <a href="#getting-started" className="text-white hover:text-blue-200">Get Started</a>
        </div>
      </div>
    </nav>
  );
}