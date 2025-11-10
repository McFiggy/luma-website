
'use client';

import React from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const data = [
  { pathogen: 'E. coli', baseline: 100, treated: 0.8 },
  { pathogen: 'Salmonella', baseline: 100, treated: 1.2 },
  { pathogen: 'Fusarium', baseline: 100, treated: 2.1 },
  { pathogen: 'Alternaria', baseline: 100, treated: 1.5 },
  { pathogen: 'Rhizoctonia', baseline: 100, treated: 3.2 }
];

export function PathogenReductionChart() {
  return (
    <div className="w-full h-80 bg-white rounded-lg p-4">
      <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">
        Pathogen Reduction* (Pilot Program - Example Data)
      </h3>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 60 }}
        >
          <XAxis 
            dataKey="pathogen" 
            tickLine={false} 
            tick={{ fontSize: 10 }}
            angle={-45}
            textAnchor="end"
            height={60}
            label={{ value: 'Pathogen Type', position: 'insideBottom', offset: -45, style: { textAnchor: 'middle', fontSize: 11 } }}
          />
          <YAxis 
            tickLine={false} 
            tick={{ fontSize: 10 }}
            label={{ value: 'Relative Count (%)', angle: -90, position: 'insideLeft', style: { textAnchor: 'middle', fontSize: 11 } }}
          />
          <Tooltip 
            contentStyle={{ fontSize: 11 }}
            formatter={(value, name) => [
              `${value}%`, 
              name === 'baseline' ? 'Untreated' : 'Plasma Treated'
            ]}
          />
          <Legend 
            verticalAlign="top"
            wrapperStyle={{ fontSize: 11 }}
          />
          <Bar 
            dataKey="baseline" 
            fill="hsl(214, 84%, 56%)" 
            name="Untreated Control"
          />
          <Bar 
            dataKey="treated" 
            fill="hsl(142, 76%, 36%)" 
            name="Plasma Treated"
          />
        </BarChart>
      </ResponsiveContainer>
      <p className="text-xs text-gray-500 text-center mt-2">
        * Representative data from laboratory testing. Log reduction varies by pathogen type and treatment parameters.
      </p>
    </div>
  );
}
