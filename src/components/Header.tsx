
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Menu, X, Coins, User } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [tokenBalance] = useState(1250);

  return (
    <header className="fixed top-0 w-full z-50 bg-slate-900/90 backdrop-blur-lg border-b border-purple-500/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">AI</span>
            </div>
            <h1 className="text-2xl font-bold text-white">Agent Hub</h1>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#marketplace" className="text-gray-300 hover:text-white transition-colors">Marketplace</a>
            <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</a>
            <a href="#docs" className="text-gray-300 hover:text-white transition-colors">API Docs</a>
            <a href="#dashboard" className="text-gray-300 hover:text-white transition-colors">Dashboard</a>
          </nav>

          <div className="flex items-center space-x-4">
            <Badge variant="secondary" className="bg-purple-600/20 text-purple-300 border-purple-500/30">
              <Coins className="w-4 h-4 mr-1" />
              {tokenBalance} tokens
            </Badge>
            <Button variant="outline" className="border-purple-500/50 text-purple-300 hover:bg-purple-600/20">
              <User className="w-4 h-4 mr-2" />
              Sign In
            </Button>
            <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
              Get Started
            </Button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-purple-500/20 pt-4">
            <nav className="flex flex-col space-y-4">
              <a href="#marketplace" className="text-gray-300 hover:text-white transition-colors">Marketplace</a>
              <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</a>
              <a href="#docs" className="text-gray-300 hover:text-white transition-colors">API Docs</a>
              <a href="#dashboard" className="text-gray-300 hover:text-white transition-colors">Dashboard</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
