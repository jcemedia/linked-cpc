import React, { useState } from 'react';
import { Calculator, Linkedin, DollarSign, TrendingUp, Users, Target } from 'lucide-react';

interface MetricCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
}

const MetricCard: React.FC<MetricCardProps> = ({ title, value, icon }) => (
  <div className="bg-white p-4 rounded-lg shadow-md">
    <div className="flex items-center gap-3 mb-2">
      <div className="text-blue-600">{icon}</div>
      <h3 className="text-gray-600 font-medium">{title}</h3>
    </div>
    <p className="text-2xl font-bold text-gray-800">{value}</p>
  </div>
);

function App() {
  const [budget, setBudget] = useState<string>('1000');
  const [clicks, setClicks] = useState<string>('100');
  const [impressions, setImpressions] = useState<string>('10000');

  const cpc = Number(budget) && Number(clicks) ? (Number(budget) / Number(clicks)).toFixed(2) : '0.00';
  const ctr = Number(clicks) && Number(impressions) ? ((Number(clicks) / Number(impressions)) * 100).toFixed(2) : '0.00';
  const cpm = Number(budget) && Number(impressions) ? ((Number(budget) / Number(impressions)) * 1000).toFixed(2) : '0.00';

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Linkedin className="w-10 h-10 text-[#0A66C2]" />
            <h1 className="text-3xl font-bold text-gray-800">LinkedIn Ads CPC Calculator</h1>
          </div>
          <p className="text-gray-600">Calculate and optimize your LinkedIn advertising metrics</p>
        </div>

        {/* Calculator Form */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Campaign Budget ($)
              </label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="number"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="pl-10 w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter budget"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Total Clicks
              </label>
              <div className="relative">
                <Target className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="number"
                  value={clicks}
                  onChange={(e) => setClicks(e.target.value)}
                  className="pl-10 w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter clicks"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Total Impressions
              </label>
              <div className="relative">
                <Users className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="number"
                  value={impressions}
                  onChange={(e) => setImpressions(e.target.value)}
                  className="pl-10 w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter impressions"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="grid md:grid-cols-3 gap-6">
          <MetricCard
            title="Cost Per Click (CPC)"
            value={`$${cpc}`}
            icon={<Calculator className="w-5 h-5" />}
          />
          <MetricCard
            title="Click-Through Rate (CTR)"
            value={`${ctr}%`}
            icon={<TrendingUp className="w-5 h-5" />}
          />
          <MetricCard
            title="Cost Per Mille (CPM)"
            value={`$${cpm}`}
            icon={<DollarSign className="w-5 h-5" />}
          />
        </div>

        {/* Tips */}
        <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Optimization Tips</h2>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              Average LinkedIn CPC ranges from $5.26 to $8.59 across industries
            </li>
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              A good CTR for LinkedIn ads is typically between 0.44% to 0.65%
            </li>
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              Optimize targeting and ad creative to improve performance metrics
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;