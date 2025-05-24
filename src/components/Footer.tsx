
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Github, Twitter, Linkedin, Mail, Shield, Zap } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-purple-500/20 py-16 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">AI</span>
              </div>
              <h3 className="text-2xl font-bold text-white">Agent Hub</h3>
            </div>
            <p className="text-gray-400 mb-4">
              The premier marketplace for AI agents, powered by token-based monetization 
              and enterprise-grade security.
            </p>
            <div className="flex space-x-4">
              <Button size="sm" variant="outline" className="border-purple-500/50 p-2">
                <Github className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="outline" className="border-purple-500/50 p-2">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="outline" className="border-purple-500/50 p-2">
                <Linkedin className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Platform</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Marketplace</a></li>
              <li><a href="#" className="hover:text-white transition-colors">API Documentation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Developer Tools</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Sales</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Status Page</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Stay Updated</h4>
            <p className="text-gray-400 mb-4">
              Get the latest updates on new features and marketplace insights.
            </p>
            <div className="flex space-x-2">
              <Input 
                placeholder="Enter your email" 
                className="bg-slate-800 border-purple-500/30 text-white"
              />
              <Button className="bg-gradient-to-r from-purple-600 to-blue-600">
                <Mail className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        <Separator className="bg-purple-500/20 mb-8" />

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="flex items-center space-x-3">
            <Shield className="w-6 h-6 text-green-400" />
            <div>
              <h5 className="text-white font-medium">Enterprise Security</h5>
              <p className="text-gray-400 text-sm">SOC 2 Type II, GDPR compliant</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <Zap className="w-6 h-6 text-yellow-400" />
            <div>
              <h5 className="text-white font-medium">99.9% Uptime</h5>
              <p className="text-gray-400 text-sm">Reliable API infrastructure</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <Mail className="w-6 h-6 text-blue-400" />
            <div>
              <h5 className="text-white font-medium">24/7 Support</h5>
              <p className="text-gray-400 text-sm">Enterprise customers</p>
            </div>
          </div>
        </div>

        <Separator className="bg-purple-500/20 mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 AI Agent Hub. All rights reserved.
          </div>
          <div className="flex space-x-6 text-gray-400 text-sm">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
