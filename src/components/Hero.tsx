
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Zap, Shield, Coins } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-24 pb-16 px-4">
      <div className="container mx-auto text-center">
        <Badge className="mb-6 bg-purple-600/20 text-purple-300 border-purple-500/30">
          <Zap className="w-4 h-4 mr-2" />
          Powered by Gradio & Hugging Face
        </Badge>
        
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Monetize Your
          <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            {" "}AI Agents
          </span>
        </h1>
        
        <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
          The first marketplace where developers sell AI agent code and users discover solutions. 
          Built with token-based pricing, automated API conversion, and enterprise-grade security.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-lg px-8 py-6">
            Start Building
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button size="lg" variant="outline" className="border-purple-500/50 text-purple-300 hover:bg-purple-600/20 text-lg px-8 py-6">
            Explore Marketplace
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <Card className="bg-slate-800/50 border-purple-500/20 p-6 text-center">
            <Coins className="w-12 h-12 text-purple-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Token Economy</h3>
            <p className="text-gray-400">Fair, transparent pricing based on actual usage and complexity</p>
          </Card>
          
          <Card className="bg-slate-800/50 border-purple-500/20 p-6 text-center">
            <Zap className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Auto API Convert</h3>
            <p className="text-gray-400">Upload code, get instant API endpoints with Gradio integration</p>
          </Card>
          
          <Card className="bg-slate-800/50 border-purple-500/20 p-6 text-center">
            <Shield className="w-12 h-12 text-green-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Enterprise Security</h3>
            <p className="text-gray-400">JWT auth, SSL pinning, and GDPR-compliant audit logs</p>
          </Card>
        </div>

        <div className="mt-16">
          <TokenFlowDiagram />
        </div>
      </div>
    </section>
  );
};

const TokenFlowDiagram = () => {
  return (
    <div className="relative bg-slate-800/30 rounded-2xl p-8 border border-purple-500/20">
      <h3 className="text-2xl font-bold text-white mb-8 text-center">How Token Flow Works</h3>
      <div className="flex items-center justify-between space-x-4 overflow-x-auto">
        {[
          { step: 1, title: "Upload Code", desc: "Drag & drop your AI agent" },
          { step: 2, title: "Auto Convert", desc: "Gradio creates API endpoint" },
          { step: 3, title: "Set Price", desc: "Define token cost per request" },
          { step: 4, title: "Go Live", desc: "Users pay tokens to access" }
        ].map((item, index) => (
          <div key={index} className="flex items-center">
            <div className="text-center min-w-[150px]">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-2">
                {item.step}
              </div>
              <h4 className="text-white font-semibold">{item.title}</h4>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </div>
            {index < 3 && (
              <div className="flex-1 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600 mx-4 min-w-[50px]" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
