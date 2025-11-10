
'use client';

import React from 'react';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { day: 1, untreated: 5, treated: 12 },
  { day: 2, untreated: 18, treated: 35 },
  { day: 3, untreated: 42, treated: 68 },
  { day: 4, untreated: 58, treated: 85 },
  { day: 5, untreated: 72, treated: 94 },
  { day: 6, untreated: 81, treated: 97 },
  { day: 7, untreated: 85, treated: 98 }
];

export function GerminationChart() {
  return (
    <div className="w-full h-80 bg-white rounded-lg p-4">
      <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">
        Germination Rate Over Time* (Pilot Program - Example Data)
      </h3>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
        >
          <defs>
            <linearGradient id="colorTreated" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="hsl(142, 76%, 36%)" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="hsl(142, 76%, 36%)" stopOpacity={0.1}/>
            </linearGradient>
            <linearGradient id="colorUntreated" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="hsl(214, 84%, 56%)" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="hsl(214, 84%, 56%)" stopOpacity={0.1}/>
            </linearGradient>
          </defs>
          <XAxis 
            dataKey="day" 
            tickLine={false} 
            tick={{ fontSize: 10 }}
            label={{ value: 'Days', position: 'insideBottom', offset: -15, style: { textAnchor: 'middle', fontSize: 11 } }}
          />
          <YAxis 
            tickLine={false} 
            tick={{ fontSize: 10 }}
            label={{ value: 'Germination %', angle: -90, position: 'insideLeft', style: { textAnchor: 'middle', fontSize: 11 } }}
          />
          <Tooltip 
            contentStyle={{ fontSize: 11 }}
          />
          <Legend 
            verticalAlign="top"
            wrapperStyle={{ fontSize: 11 }}
          />
          <Area
            type="monotone"
            dataKey="treated"
            stackId="1"
            stroke="hsl(142, 76%, 36%)"
            fill="url(#colorTreated)"
            name="Plasma Treated"
          />
          <Area
            type="monotone"
            dataKey="untreated"
            stackId="2"
            stroke="hsl(214, 84%, 56%)"
            fill="url(#colorUntreated)"
            name="Untreated Control"
          />
        </AreaChart>
      </ResponsiveContainer>
      <p className="text-xs text-gray-500 text-center mt-2">
        * Representative data from controlled trials. Actual results may vary by seed type and conditions.
      </p>
    </div>
  );
}
