
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import TokenSystem from '../components/TokenSystem';
import MarketplaceFeatures from '../components/MarketplaceFeatures';
import PricingCalculator from '../components/PricingCalculator';
import APIExplorer from '../components/APIExplorer';
import Dashboard from '../components/Dashboard';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Header />
      <Hero />
      <TokenSystem />
      <MarketplaceFeatures />
      <PricingCalculator />
      <APIExplorer />
      <Dashboard />
      <Footer />
    </div>
  );
};

export default Index;
