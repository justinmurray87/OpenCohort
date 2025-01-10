import React, { ReactNode } from 'react';

interface StatCardProps {
  icon: ReactNode;
  number: string;
  label: string;
}

export function StatCard({ icon, number, label }: StatCardProps) {
  return (
    <div className="bg-white p-6 rounded-xl border border-gray-200 text-center">
      <div className="flex justify-center mb-4">{icon}</div>
      <div className="text-3xl font-bold mb-2">{number}</div>
      <div className="text-gray-600">{label}</div>
    </div>
  );
}