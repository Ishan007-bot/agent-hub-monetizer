
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Sparkles, User, Coins, Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [tokenBalance] = useState(1250);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <div 
              className="flex items-center space-x-3 cursor-pointer"
              onClick={() => navigate('/')}
            >
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-blue-600 rounded-xl flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-blue-600 bg-clip-text text-transparent">
                Lovable AI
              </h1>
            </div>

            <nav className="hidden md:flex items-center space-x-6">
              <button 
                onClick={() => navigate('/consumer')}
                className={`text-sm font-medium transition-colors ${
                  isActive('/consumer') ? 'text-orange-600' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Marketplace
              </button>
              <button 
                onClick={() => navigate('/producer')}
                className={`text-sm font-medium transition-colors ${
                  isActive('/producer') ? 'text-orange-600' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Producer
              </button>
              <button 
                onClick={() => navigate('/about')}
                className={`text-sm font-medium transition-colors ${
                  isActive('/about') ? 'text-orange-600' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                About
              </button>
              <button 
                onClick={() => navigate('/faq')}
                className={`text-sm font-medium transition-colors ${
                  isActive('/faq') ? 'text-orange-600' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                FAQ
              </button>
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-3">
              <Badge variant="secondary" className="bg-orange-50 text-orange-700 border-orange-200">
                <Coins className="w-3 h-3 mr-1" />
                {tokenBalance.toLocaleString()}
              </Badge>
            </div>
            
            <Button 
              variant="outline" 
              size="sm" 
              className="border-gray-300 text-gray-700 hover:bg-gray-50"
              onClick={() => navigate('/login')}
            >
              <User className="w-4 h-4 mr-2" />
              Sign In
            </Button>
            <Button 
              size="sm" 
              className="bg-orange-500 hover:bg-orange-600 text-white"
              onClick={() => navigate('/signup')}
            >
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
              <button 
                onClick={() => {
                  navigate('/consumer');
                  setIsMenuOpen(false);
                }}
                className="text-gray-600 hover:text-gray-900 text-sm font-medium text-left"
              >
                Marketplace
              </button>
              <button 
                onClick={() => {
                  navigate('/producer');
                  setIsMenuOpen(false);
                }}
                className="text-gray-600 hover:text-gray-900 text-sm font-medium text-left"
              >
                Producer
              </button>
              <button 
                onClick={() => {
                  navigate('/about');
                  setIsMenuOpen(false);
                }}
                className="text-gray-600 hover:text-gray-900 text-sm font-medium text-left"
              >
                About
              </button>
              <button 
                onClick={() => {
                  navigate('/faq');
                  setIsMenuOpen(false);
                }}
                className="text-gray-600 hover:text-gray-900 text-sm font-medium text-left"
              >
                FAQ
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navigation;
