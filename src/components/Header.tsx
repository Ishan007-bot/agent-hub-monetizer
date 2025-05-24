
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Menu, X, Coins, User, Search } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [tokenBalance] = useState(1250);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-orange-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">🤗</span>
              </div>
              <h1 className="text-xl font-semibold text-gray-900">Agent Hub</h1>
            </div>

            <nav className="hidden md:flex items-center space-x-6">
              <a href="#models" className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors">Models</a>
              <a href="#datasets" className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors">Datasets</a>
              <a href="#spaces" className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors">Spaces</a>
              <a href="#pricing" className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors">Pricing</a>
              <a href="#docs" className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors">Docs</a>
            </nav>
          </div>

          <div className="flex items-center space-x-3">
            <div className="hidden md:flex items-center space-x-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search models, datasets..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>
              <Badge variant="secondary" className="bg-orange-50 text-orange-700 border-orange-200">
                <Coins className="w-3 h-3 mr-1" />
                {tokenBalance.toLocaleString()}
              </Badge>
            </div>
            
            <Button variant="outline" size="sm" className="border-gray-300 text-gray-700 hover:bg-gray-50">
              <User className="w-4 h-4 mr-2" />
              Sign In
            </Button>
            <Button size="sm" className="bg-orange-500 hover:bg-orange-600 text-white">
              Get Started
            </Button>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-600"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            <nav className="flex flex-col space-y-3">
              <a href="#models" className="text-gray-600 hover:text-gray-900 text-sm font-medium">Models</a>
              <a href="#datasets" className="text-gray-600 hover:text-gray-900 text-sm font-medium">Datasets</a>
              <a href="#spaces" className="text-gray-600 hover:text-gray-900 text-sm font-medium">Spaces</a>
              <a href="#pricing" className="text-gray-600 hover:text-gray-900 text-sm font-medium">Pricing</a>
              <a href="#docs" className="text-gray-600 hover:text-gray-900 text-sm font-medium">Docs</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
