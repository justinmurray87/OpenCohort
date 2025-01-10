import React from 'react';
import { MessageSquare } from 'lucide-react';

export function Community() {
  return (
    <section id="community" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Open Source Community</h2>
          <p className="text-gray-600 text-lg mb-8">
            Collaborate with healthcare professionals and developers worldwide to build better analytics tools for value-based care.
          </p>
          <a 
            href="https://join.slack.com/t/opencohortworkspace/signup" 
            className="inline-flex items-center px-8 py-3 rounded-lg font-semibold text-white bg-[#4A154B] hover:bg-[#3a1139] transition-colors"
          >
            <MessageSquare className="mr-2 h-5 w-5" />
            Join our Slack Community
          </a>
        </div>
      </div>
    </section>
  );
}