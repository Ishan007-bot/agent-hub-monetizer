
import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight, Sparkles, Code, Users } from 'lucide-react';
import { Navbar } from "@/components/Navbar";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="container px-4 py-24 mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                The AI Agent
                <br />
                <span className="bg-gradient-to-r from-orange-500 to-blue-600 bg-clip-text text-transparent">
                  Marketplace
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Build, share, and monetize AI agents. Connect creators with users in a
                revolutionary token-based economy powered by cutting-edge AI technology.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
                <Button
                  size="lg"
                  onClick={() => navigate('/producer')}
                  className="bg-orange-500 hover:bg-orange-600 text-white"
                >
                  Start Building
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => navigate('/consumer')}
                >
                  Explore Agents
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative h-[500px] rounded-2xl overflow-hidden"
            >
              <div className="w-full h-full bg-gradient-to-br from-gray-900 to-black rounded-2xl relative">
                <AIAgentAnimation />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="container px-4 py-24 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Choose SmartMinions?</h2>
            <p className="text-xl text-muted-foreground">
              The most advanced platform for AI agent development and deployment
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Code className="w-10 h-10" />,
                title: "Easy Integration",
                description:
                  "Upload your code and we'll automatically convert it into a deployable AI agent.",
              },
              {
                icon: <Sparkles className="w-10 h-10" />,
                title: "Token Economy",
                description:
                  "Fair, transparent pricing based on actual usage. Earn tokens by creating valuable AI agents.",
              },
              {
                icon: <Users className="w-10 h-10" />,
                title: "Global Community",
                description:
                  "Join thousands of AI developers and users. Share knowledge and collaborate.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 text-center h-full flex flex-col items-center">
                  <div className="mb-6 p-3 rounded-lg bg-primary/10">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

const AIAgentAnimation = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="relative">
        {/* Central AI Brain */}
        <motion.div
          className="w-32 h-32 bg-gradient-to-br from-orange-400 to-blue-500 rounded-full relative"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <div className="absolute inset-4 bg-gradient-to-br from-orange-300 to-blue-400 rounded-full animate-pulse" />
          <div className="absolute inset-8 bg-gradient-to-br from-orange-200 to-blue-300 rounded-full" />
        </motion.div>

        {/* Orbiting Nodes */}
        {[0, 1, 2, 3, 4, 5].map((index) => (
          <motion.div
            key={index}
            className="absolute w-4 h-4 bg-gradient-to-r from-green-400 to-cyan-400 rounded-full"
            style={{
              top: '50%',
              left: '50%',
              transformOrigin: '0 0',
            }}
            animate={{
              rotate: [0, 360],
              x: [0, Math.cos((index * 60) * Math.PI / 180) * 100],
              y: [0, Math.sin((index * 60) * Math.PI / 180) * 100],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "linear",
              delay: index * 0.5,
            }}
          />
        ))}

        {/* Connecting Lines */}
        <div className="absolute inset-0">
          <svg className="w-full h-full" viewBox="0 0 300 300">
            {[0, 1, 2, 3, 4, 5].map((index) => (
              <motion.line
                key={index}
                x1="150"
                y1="150"
                x2={150 + Math.cos((index * 60) * Math.PI / 180) * 100}
                y2={150 + Math.sin((index * 60) * Math.PI / 180) * 100}
                stroke="rgba(59, 130, 246, 0.3)"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: index * 0.2,
                }}
              />
            ))}
          </svg>
        </div>

        {/* Floating Text */}
        <motion.div
          className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 text-center"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <p className="text-white text-lg font-semibold">AI Agent Network</p>
          <p className="text-gray-300 text-sm">Connected Intelligence</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Landing;
