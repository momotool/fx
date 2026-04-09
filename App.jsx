import React from 'react';
import ScalpingSection from './components/ScalpingSection';
import AutoTradingSection from './components/AutoTradingSection';
import BrokerCompareSection from './components/BrokerCompareSection';
import AutoTradingStartSetSection from './components/AutoTradingStartSetSection';

export default function App() {
  return (
    <main className="min-h-screen bg-[#f8f9fc] py-6">
      <ScalpingSection />
      <AutoTradingSection />
      <BrokerCompareSection />
      <AutoTradingStartSetSection />
    </main>
  );
}
