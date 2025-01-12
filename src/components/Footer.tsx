import React from 'react';
import { LineChart, Github, MessageSquare, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <LineChart className="h-6 w-6" />
            <span className="font-bold">OpenCohort</span>
          </div>
          <div className="flex space-x-6">
            <a href="https://github.com/OpenCohortOrg" className="hover:text-blue-400">
              <Github className="h-6 w-6" />
            </a>
            <a href="https://join.slack.com/t/opencohortworkspace/signup" className="hover:text-[#4A154B]">
              <MessageSquare className="h-6 w-6" />
            </a>
            <a href="https://x.com/opencohortorg" className="hover:text-[#1DA1F2]">
              <Twitter className="h-6 w-6" />
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400">
          <p>&copy; 2025 OpenCohort. Open source tools for health analytics.</p>
        </div>
      </div>
    </footer>
  );
}