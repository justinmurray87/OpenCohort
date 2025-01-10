import React from 'react';

export function CallToAction() {
  return (
    <section id="getting-started" className="py-20">
      <div className="container mx-auto px-6">
        <div className="bg-blue-600 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Start Improving Your Value-Based Care Metrics Today
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Are You A Health System? Free use of open-source tools to transform analytics process and create an action plans to 'close the gap'.
          </p>
          <div className="flex justify-center space-x-4">
            <a href="https://github.com/OpenCohortOrg" 
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              View Documentation
            </a>
            <a href="mailto:justin@opencohort.org?subject=OpenCohort Connect" 
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Request Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}