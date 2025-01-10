import React from 'react';
import { BarChart3, Database, Shield } from 'lucide-react';
import { FeatureCard } from './FeatureCard';

export function Features() {
  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16">Built for Value-Based Care Analytics</h2>
        <div className="grid md:grid-cols-3 gap-12">
          <FeatureCard 
            icon={<BarChart3 className="h-8 w-8 text-blue-600" />}
            title="Metric Tracking"
            description="Track and visualize key performance indicators for value-based care programs with customizable dashboards."
          />
          <FeatureCard 
            icon={<Database className="h-8 w-8 text-blue-600" />}
            title="Data Integration"
            description="Seamlessly integrate with existing healthcare systems and data sources for comprehensive analytics."
          />
          <FeatureCard 
            icon={<Shield className="h-8 w-8 text-blue-600" />}
            title="HIPAA Compliant"
            description="Simpify the analytics and sharing process by removing PHI from the monitoring and planning process."
          />
        </div>
      </div>
    </section>
  );
}