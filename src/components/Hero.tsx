import React from 'react';
import { ArrowRight, Github } from 'lucide-react';

export function Hero() {
  return (
    <div className="container mx-auto px-6 py-24">
      <div className="max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Open Source Insights for Quality-Based Care
        </h1>
        <p className="text-xl text-blue-100 mb-8">
          Access and collaborate on community-developed tools for tracking, analyzing, and improving value-based metrics.
        </p>
        <div className="flex space-x-4">
          <a href="#getting-started" 
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center">
            Get Started <ArrowRight className="ml-2 h-5 w-5" />
          </a>
          <a href="https://github.com/OpenCohortOrg" 
            className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors flex items-center">
            <Github className="mr-2 h-5 w-5" /> View on GitHub
          </a>
        </div>
      </div>
    </div>
  );
}